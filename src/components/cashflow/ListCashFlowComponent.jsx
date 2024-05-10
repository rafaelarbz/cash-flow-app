import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Divider } from 'primereact/divider';
import { fields } from '../../utils/CashFlowUtil';
import { Button } from 'primereact/button';
import ConfirmDialogComponent from '../general/ConfirmDialogComponent';
import { useState } from 'react';

export default function ListCashFlowComponent({releases, totals, onRemoveRelease}) {
    const [visibleRemoveDialog, setVisibleRemoveDialog] = useState(false);
    const [releaseToRemove, setReleaseToRemove] = useState(null);

    const bodyRemoveTemplate = (rowData) => {
        return <Button 
                    onClick={() => removeRelease(rowData)}
                    icon="pi pi-times" 
                    rounded text raised 
                    severity="danger" 
                    aria-label="Cancel" 
                    size="small"
                />;
    };

    const removeRelease = (release) => {
        setVisibleRemoveDialog(true);
        setReleaseToRemove(release);
    };

    const onConfirmRemoveDialog = () => {
        if (releaseToRemove) {
            onRemoveRelease(releaseToRemove.id);
            setVisibleRemoveDialog(false);
        }
    };

    const onRejectRemoveDialog = () => {
        setReleaseToRemove(null);
        setVisibleRemoveDialog(false);
    };

    return (
        <div>
            <ConfirmDialogComponent 
                onConfirm={onConfirmRemoveDialog}
                onReject={onRejectRemoveDialog}
                message="Deseja remover este item?"
                visible={visibleRemoveDialog}
            />
            <DataTable className="mt-1" value={releases} paginator rows={5} rowsPerPageOptions={[5, 10, 15, 20, 25, 30]} removableSort>
                <Column field="date" header="Data" style={{ width: '10%' }} sortable></Column>
                <Column field="type" header="Tipo" style={{ width: '20%' }}></Column>
                <Column field="description" header="Descrição" style={{ width: '30%' }}></Column>
                <Column field="payment" header="Pagamento" style={{ width: '20%' }}></Column>
                <Column field="amount" header="Valor" style={{ width: '15%' }}></Column>
                <Column style={{ width: '10%' }} body={bodyRemoveTemplate} />
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