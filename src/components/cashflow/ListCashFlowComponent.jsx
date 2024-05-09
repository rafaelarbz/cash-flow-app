import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Divider } from 'primereact/divider';
import { fields } from '../../utils/CashFlowUtil';

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
                Total de Entradas: {totals[fields.type.options.inflow]['total'] || "R$ 0,00"}
                <Divider />
                Total de Saídas: {totals[fields.type.options.outflow]['total'] || "R$ 0,00"}
                <Divider />
                Total de Entradas - Cartão: {totals[fields.type.options.inflow][fields.payment.options.card] || "R$ 0,00"}
                <Divider />
                Total de Entradas - Dinheiro: {totals[fields.type.options.inflow][fields.payment.options.cash] || "R$ 0,00"}
            </div>
        </div>
    );
}