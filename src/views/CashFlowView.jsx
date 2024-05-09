import { useEffect, useState } from "react";
import BasicCardComponent from "../components/general/BasicCardComponent";
import FormNewCashFlowComponent from "../components/cashflow/FormNewCashFlowComponent";
import ListCashFlowComponent from "../components/cashflow/ListCashFlowComponent";

export default function CashFlowView() {
    const [title, setTitle] = useState("Lançamentos");
    const [releases, setReleases] = useState([]);
    const [totals, setTotals] = useState({Entrada: {}, Saída: {} });

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

    useEffect(() => {
        sumTotals();
    }, [releases]);

    const sumTotals = () => {
        const newTotals = { Entrada: { }, Saída: { } };
    
        releases.forEach((release) => {
          const numericValue = parseFloat(
            release.amount.replace(/[^\d,]/g, '').replace(',', '.')
          );
    
          if (!newTotals[release.type][release.payment]) {
            newTotals[release.type][release.payment] = 0;
          }
    
          newTotals[release.type][release.payment] += numericValue;
    
          newTotals[release.type].total += numericValue;
    
          newTotals[release.type][release.payment] = formatCurrency.format(newTotals[release.type][release.payment]);
        });
    
        newTotals['Entrada']['Total'] = formatCurrency.format(newTotals['Entrada']['Total'] || 0);
        newTotals['Saída']['Total'] = formatCurrency.format(newTotals['Saída']['Total'] || 0);
    
        setTotals(newTotals);
    };

    const formatCurrency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return (
        <div className="flex justify-content-center gap-2 mr-8 ml-8">
            <div className="field col-4">
                <BasicCardComponent title="Adicionar" content={(
                    <FormNewCashFlowComponent 
                        onTitleChange={handleTitleChange}
                        onReleaseChange={handleReleasesChange}
                    />
                )} />
            </div>
            <div className="field col">
                <BasicCardComponent title={title}  content={(
                    <ListCashFlowComponent releases={releases} totals={totals} />
                )} />
            </div>
        </div>
    );
}