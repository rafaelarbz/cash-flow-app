import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Divider } from 'primereact/divider';

export default function ListCashFlowComponent({releases, totals}) {

    return (
        <div>
            <DataTable className="mt-1" value={releases} paginator rows={5} rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}>
                <Column field="type" header="Tipo" style={{ width: '20%' }}></Column>
                <Column field="date" header="Data" style={{ width: '20%' }}></Column>
                <Column field="payment" header="Pagamento" style={{ width: '20%' }}></Column>
                <Column field="amount" header="Valor" style={{ width: '20%' }}></Column>
            </DataTable>
            <div className="justify-content-left mt-4">
                Total de Entradas: {totals['Entrada']['Total'] || "R$ 0,00"}
                <Divider />
                Total de Saídas: {totals['Saída']['Total'] || "R$ 0,00"}
                <Divider />
                Total de Entradas - Cartão: {totals['Entrada']['Cartão'] || "R$ 0,00"}
                <Divider />
                Total de Entradas - Dinheiro: {totals['Entrada']['Dinheiro'] || "R$ 0,00"}
            </div>
        </div>
    );
}