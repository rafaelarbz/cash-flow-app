import { useEffect, useState } from "react";
import BasicCardComponent from "../components/general/BasicCardComponent";
import FormNewCashFlowComponent from "../components/cashflow/FormNewCashFlowComponent";
import ListCashFlowComponent from "../components/cashflow/ListCashFlowComponent";
import { totalsStructure } from "../utils/CashFlowUtil";
import { formatCurrency } from "../utils/DataFormatterUtil";

export default function CashFlowView() {
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
        <div className="flex justify-content-center gap-2 mr-8 ml-8">
            <div className="field col-4">
                <BasicCardComponent title="Novo Lançamento" content={(
                    <FormNewCashFlowComponent 
                        onTitleChange={handleTitleChange}
                        onReleaseChange={handleReleasesChange}
                        selectedId={releaseIdToRemove}
                    />
                )} />
            </div>
            <div className="field col">
                <BasicCardComponent title={title}  content={(
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