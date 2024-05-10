import { useEffect, useState } from "react";
import BasicCardComponent from "../components/general/BasicCardComponent";
import FormNewCashFlowComponent from "../components/cashflow/FormNewCashFlowComponent";
import ListCashFlowComponent from "../components/cashflow/ListCashFlowComponent";
import { fields, releaseColumnsToExport, totalsInfoLabel, totalsStructure } from "../utils/CashFlowUtil";
import { formatColumnsToExport, formatCurrency, formatFileName } from "../utils/DataFormatterUtil";
import ButtonExportPdfComponent from "../components/general/ButtonExportPdfComponent";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { useToast } from "../contexts/ToastContext";

export default function CashFlowView() {
    const { showToast } = useToast();
    const [title, setTitle] = useState("Lançamentos");
    const [releases, setReleases] = useState([]);
    const [totals, setTotals] = useState(totalsStructure);
    const [releaseIdToRemove, setReleaseIdToRemove] = useState(null);

    const handleTitleChange = (enterpriseName) => {
        if (enterpriseName) {
            setTitle("Lançamentos de " + enterpriseName);
        } else {
            setTitle("Lançamentos");
        }
    };

    const handleReleasesChange = (releases) => {
        setReleases(releases);
    };

    const handleRemoveRelease = (id) => {
        setReleaseIdToRemove(id);
    };

    const exportPdf = () => {
        if (releases.length > 0) {
            const columnsDetails = formatColumnsToExport(releaseColumnsToExport);
            const fileName = formatFileName(title);

            let doc = new jsPDF();

            doc.setFontSize(12);
            
            doc.text(title, 10, 10);
            
            doc.autoTable(columnsDetails, releases);
            doc.autoTable([{
                dataKey: 'total',
                title: 'Totais'
            }], [{
                total: totalsInfoLabel.inflow.total+totals[fields.type.options.inflow]['total']
            }, {
                total: totalsInfoLabel.outflow.total+totals[fields.type.options.outflow]['total']
            }, {
                total: totalsInfoLabel.inflow.card+totals[fields.type.options.inflow][fields.payment.options.card]
            }, {
                total: totalsInfoLabel.inflow.cash+totals[fields.type.options.inflow][fields.payment.options.cash]
            }]);

            doc.save(`${fileName}.pdf`);
        } else {
            showToast('error', 'Oops', 'Não há lançamentos para exportar.');
        }
    };

    const titleCardList = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <h4 className="m-0">{title}</h4>
            <ButtonExportPdfComponent  exportPdf={exportPdf} />
        </div>
    );

    useEffect(() => {
        sumTotals();
    }, [releases]);

    const sumTotals = () => {
        let newTotals = JSON.parse(JSON.stringify(totalsStructure)); // Clona a estrutura para evitar mutação direta
    
        releases.forEach((release) => {
          const numericValue = parseFloat(
            release.amount.replace(/[^\d,]/g, '').replace(',', '.')
          );
    
          newTotals[release.type][release.payment] += numericValue;
          newTotals[release.type]['total'] += numericValue;
        });
    
        Object.keys(newTotals).forEach(type => {
          Object.keys(newTotals[type]).forEach(key => {
            newTotals[type][key] = formatCurrency.format(newTotals[type][key]);
          });
        });
    
        setTotals(newTotals);
    };

    return (
        <div className="md:flex lg:flex xl:flex gap-2 mr-8 ml-8">
            <div className="field md:col-4 lg:col-4 xl:col-4">
                <BasicCardComponent title="Novo Lançamento" content={(
                    <FormNewCashFlowComponent 
                        onTitleChange={handleTitleChange}
                        onReleaseChange={handleReleasesChange}
                        selectedId={releaseIdToRemove}
                    />
                )} />
            </div>
            <div className="field col">
                <BasicCardComponent title={titleCardList}  content={(
                    <ListCashFlowComponent 
                        releases={releases} 
                        totals={totals} 
                        onRemoveRelease={handleRemoveRelease}
                    />
                )} />
            </div>
        </div>
    );
}