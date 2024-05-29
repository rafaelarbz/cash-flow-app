import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useGeneralForm } from '../../utils/GeneralFormUtil';

export default function ConfirmDialogComponent({visible, icon="pi pi-question", title="Attention", message, onConfirm, onReject}) {
    
    const generalFormLabels = useGeneralForm();

    return (
        <ConfirmDialog
            group="headless"
            visible={visible}
            content={() => (
                <div className="flex flex-column align-items-center p-5 surface-overlay border-round">
                    <div className="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                        <i className={`${icon} text-5xl`}></i>
                    </div>
                    <span className="font-bold text-2xl block mb-2 mt-4">
                        {title}
                    </span>
                    <p className="mb-0" >
                        {message}
                    </p>
                    <div className="flex align-items-center gap-2 mt-4" >
                        <Button
                            label={generalFormLabels.buttons.confirm}
                            text raised
                            severity="success"
                            onClick={() => {
                                onConfirm()
                            }}
                            className="w-8rem"
                        ></Button>
                        <Button
                            label={generalFormLabels.buttons.cancel}
                            text raised
                            severity="danger"
                            onClick={() => {
                                onReject()
                            }}
                            className="w-8rem"
                        ></Button>
                    </div>
                </div>
            )}
        />
    );
}