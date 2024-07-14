import { useEffect, useState } from "react";
import BasicCardComponent from "../components/general/BasicCardComponent";
import FormNewCashFlowComponent from "../components/cashflow/FormNewCashFlowComponent";
import ListCashFlowComponent from "../components/cashflow/ListCashFlowComponent";
import { useFields, useFunctionalities, useReleaseColumnsToExport, useTotalsInfoLabel, useTotalsStructure} from "../utils/CashFlowUtil";
import { formatColumnsToExport, formatCurrency, formatFileName } from "../utils/DataFormatterUtil";
import ButtonExportPdfComponent from "../components/general/ButtonExportPdfComponent";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { useToast } from "../contexts/ToastContext";
import { useMessage } from "../utils/MessagesUtil";

export default function CashFlowView() {
    const { showToast } = useToast();
    const fields = useFields();
    const releaseColumnsToExport = useReleaseColumnsToExport();
    const totalsInfoLabel = useTotalsInfoLabel();
    const totalsStructure = useTotalsStructure();
    const messages = useMessage();
    const labelFunctionalities = useFunctionalities();
    
    const [title, setTitle] = useState(labelFunctionalities.listReleases);
    const [releases, setReleases] = useState([]);
    const [totals, setTotals] = useState(totalsStructure);
    const [releaseIdToRemove, setReleaseIdToRemove] = useState(null);

    const handleTitleChange = (enterpriseName) => {
        if (enterpriseName) {
            setTitle(labelFunctionalities.listReleasesFromEnterprise + enterpriseName);
        } else {
            setTitle(labelFunctionalities.listReleases);
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
                title: fields.totals.title
            }], [{
                total: totalsInfoLabel.inflow.total+totals[fields.type.options.inflow]['total']
            }, {
                total: totalsInfoLabel.outflow.total+totals[fields.type.options.outflow]['total']
            }, {
                total: totalsInfoLabel.netFlow.total+totals['netFlow']['total']
            }, {
                total: totalsInfoLabel.inflow.card+totals[fields.type.options.inflow][fields.payment.options.card]
            }, {
                total: totalsInfoLabel.inflow.cash+totals[fields.type.options.inflow][fields.payment.options.cash]
            }]);

            doc.save(`${fileName}.pdf`);
        } else {
            showToast(
                'error', 
                messages.errors.noReleasesToExport.title, 
                messages.errors.noReleasesToExport.message);
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
        let newTotals = JSON.parse(JSON.stringify(totalsStructure));
    
        releases.forEach((release) => {
          const numericValue = parseFloat(
            release.amount.replace(/[^\d,]/g, '').replace(',', '.')
          );
    
          newTotals[release.type][release.payment] += numericValue;
          newTotals[release.type]['total'] += numericValue;

            if (release.type === fields.type.options.inflow) {
                newTotals['netFlow']['total'] += numericValue;
            } else if (release.type === fields.type.options.outflow) {
                newTotals['netFlow']['total'] -= numericValue;
            }
        });
    
        Object.keys(newTotals).forEach(type => {
          Object.keys(newTotals[type]).forEach(key => {
            newTotals[type][key] = formatCurrency(newTotals[type][key], fields.locale, fields.currency.type);
          });
        });
    
        setTotals(newTotals);
    };

    return (
        <div className="
            sm:mt-5
            md:flex md:mr-5 md:ml-5
            lg:flex lg:mr-5 lg:ml-5
            xl:flex xl:mr-5 lg:ml-5
            gap-2">
            <div className="sm:mb-2 md:mb-2 md:col-4 lg:col-4 xl:col-4">
                <BasicCardComponent title={labelFunctionalities.newRealease} content={(
                    <FormNewCashFlowComponent 
                        onTitleChange={handleTitleChange}
                        onReleaseChange={handleReleasesChange}
                        selectedId={releaseIdToRemove}
                    />
                )} />
            </div>
            <div className="md:col-8 lg:col-8 xl:col-8">
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