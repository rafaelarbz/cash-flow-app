import { Button } from 'primereact/button';

export default function ButtonExportPdfComponent({exportPdf}) {

    return (
        <Button 
            type="button" 
            icon="pi pi-file-pdf"
            severity="warning" 
            text raised rounded
            onClick={exportPdf} 
            data-pr-tooltip="PDF"
        />
    );
}