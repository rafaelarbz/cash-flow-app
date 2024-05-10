import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function CustomConfirmDialog({ onConfirm, onReject, icon="pi pi-question", header="Atenção", message , visible}) {
    return (
        <Dialog visible={visible} onHide={onReject} header={header} modal>
            <div className="flex flex-column align-items-center p-3">
                <i className={`${icon} text-4xl mb-3`}></i>
                <p>{message}</p>
                <div className="flex gap-2 mt-3">
                    <Button label="Confirmar" icon="pi pi-check" onClick={onConfirm} />
                    <Button label="Cancelar" icon="pi pi-times" onClick={onReject} className="p-button-text" />
                </div>
            </div>
        </Dialog>
    );
}