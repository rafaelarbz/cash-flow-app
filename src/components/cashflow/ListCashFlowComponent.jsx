import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Divider } from 'primereact/divider';
import { useFields, useFunctionalities, useTotalsInfoLabel } from '../../utils/CashFlowUtil';
import { Button } from 'primereact/button';
import ConfirmDialogComponent from '../general/ConfirmDialogComponent';
import { useState } from 'react';
import { useMessage } from '../../utils/MessagesUtil';

export default function ListCashFlowComponent({releases, totals, onRemoveRelease}) {
    const fields = useFields();
    const totalsInfoLabel = useTotalsInfoLabel();
    const messages = useMessage();

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
                title={messages.alerts.confirmRemove.title}
                message={messages.alerts.confirmRemove.message}
                visible={visibleRemoveDialog}
            />
            <DataTable className="mt-1" value={releases} paginator rows={5} rowsPerPageOptions={[5, 15, 25, 35, 45, 55]} removableSort>
                <Column field="date" header={fields.date.title} style={{ width: '10%' }} sortable></Column>
                <Column field="type" header={fields.type.title} style={{ width: '20%' }}></Column>
                <Column field="description" header={fields.description.title} style={{ width: '30%' }}></Column>
                <Column field="payment" header={fields.payment.title} style={{ width: '20%' }}></Column>
                <Column field="amount" header={fields.amount.title} style={{ width: '15%' }}></Column>
                <Column style={{ width: '10%' }} body={bodyRemoveTemplate} />
            </DataTable>
            <div className="justify-content-left mt-4">
                {totalsInfoLabel.inflow.total} {totals[fields.type.options.inflow]['total'] || `${fields.currency.label} 0,00`}
                <Divider />
                {totalsInfoLabel.outflow.total} {totals[fields.type.options.outflow]['total'] || `${fields.currency.label} 0,00`}
                <Divider />
                {totalsInfoLabel.inflow.card} {totals[fields.type.options.inflow][fields.payment.options.card] ||`${fields.currency.label} 0,00`}
                <Divider />
                {totalsInfoLabel.inflow.cash} {totals[fields.type.options.inflow][fields.payment.options.cash] || `${fields.currency.label} 0,00`}
            </div>
        </div>
    );
}