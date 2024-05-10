import { useEffect, useRef, useState } from "react";
import { formFields } from "../../utils/CashFlowFormFieldsUtil";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { fields } from "../../utils/CashFlowUtil";
import { formatCurrency, formatDate } from "../../utils/DataFormatterUtil";

export default function FormNewCashFlowComponent({onTitleChange, onReleaseChange, selectedId}) {
    //STATES
    const toast = useRef(null);
    const [releases, setReleases] = useState([]);
    const [type, setType] = useState(null);
    const [payment, setPayment] = useState(null);
    const [date, setDate] = useState(null);
    const [amount, setAmount] = useState(null);
    const [description, setDescription] = useState("");
    const [enterpriseName, setEnterpriseName] = useState("");
    const [confirmEnterpriseName, setConfirmEnterpriseName] = useState(false);

    //FORM
    const selectFields = formFields.selectFields;
    const textFields = formFields.inputTextFields;
    const currencyFields = formFields.inputCurrencyFields;
    const dateFields = formFields.dateFields;

    useEffect(() => {
        onReleaseChange(releases);
    }, [releases]);

    useEffect(() => {
        if (selectedId) {
            removeRelease(selectedId);
        }
    }, [selectedId])

    useEffect(() => {
        onTitleChange(enterpriseName);
    }, [enterpriseName]);
    
    const clearForm = () => {
        setType(null);
        setPayment(null);
        setDate(null);
        setAmount(null);
        setDescription("");
    };

    const saveEnterpriseName = () => {
        if (!enterpriseName) {
            setConfirmEnterpriseName(false);
            showAlert('Atenção', 'Informe o empreendimento.', 'warn');
        } else {
            setConfirmEnterpriseName(true);
        }
    };

    const saveRelease = () => {
        if (!type || !payment || !date || !amount ) {
            showAlert('Erro', 'Por favor, preencha todos os campos obrigatórios.', 'error');
            return;
        }
    
        const formattedDate = date ? formatDate(date) : null;
        const formattedAmount = amount ? formatCurrency.format(amount) : null;
        const formattedType = type ? getType(type) : null;
        const formattedPayment = payment ? getPayment(payment) : null;

        const release = {
            id: Date.now(),
            type: formattedType,
            payment: formattedPayment,
            date: formattedDate,
            amount: formattedAmount,
            description: description
        };

        setReleases([...releases, release]);
        clearForm();
        showAlert('Sucesso', 'Item adicionado!', 'contrast');
    };

    const removeRelease = (id) => {
        const updatedReleases = releases.filter(item => item.id !== id);
        setReleases(updatedReleases);
    };

    const getType = (value) => {
        return fields.type.options[value] || null;
    };

    const getPayment = (value) => {
        return fields.payment.options[value] || null;
    };

    const showAlert = (title, message, type = 'contrast', life = 3000) => {
        toast.current.show({ severity: type, summary: title, detail: message, life: life });
    };

    return (
        <>
            <Toast ref={toast} />
            {!confirmEnterpriseName && 
                <div>
                    <div className="field">
                        <label className="flex align-items-center gap-2">
                            <i className={textFields.enterpriseName.icon}></i>
                            {textFields.enterpriseName.label}
                        </label>
                        <InputText 
                            className="w-full p-inputtext-sm"
                            value={enterpriseName} 
                            onChange={(e) => setEnterpriseName(e.target.value)}
                        />    
                        <small id="enterprise-help">
                           Informe para prosseguir.
                        </small>
                    </div>
                    <div className="flex justify-content-center mt-6 mb-1">
                        <Button icon="pi pi-chevron-right" text raised rounded severity="secondary" onClick={saveEnterpriseName}/>
                    </div>
                </div>
            }
            
            {enterpriseName && confirmEnterpriseName && 
                <div>
                    <div className="field">
                        <label className="flex align-items-center gap-2">
                            <i className={selectFields.type.icon}></i>
                            {selectFields.type.label}
                        </label>
                        <Dropdown 
                            value={type} 
                            onChange={(e) => setType(e.target.value)} 
                            options={selectFields.type.options} 
                            optionLabel="label" 
                            placeholder={selectFields.type.placeholder} 
                            className="w-full p-inputtext-sm" 
                            checkmark={true} 
                            highlightOnSelect={false}
                        />
                    </div>
                    <div className="field">
                        <label className="flex align-items-center gap-2">
                            <i className={selectFields.payment.icon}></i>
                            {selectFields.payment.label}
                        </label>
                        <Dropdown 
                            value={payment} 
                            onChange={(e) => setPayment(e.target.value)} 
                            options={selectFields.payment.options} 
                            optionLabel="label" 
                            placeholder={selectFields.payment.placeholder} 
                            className="w-full p-inputtext-sm" 
                            checkmark={true} 
                            highlightOnSelect={false} 
                        />
                    </div>
                    <div className="field">
                        <label className="flex align-items-center gap-2">
                            <i className={dateFields.releaseDate.icon}></i>
                            {dateFields.releaseDate.label}
                        </label>
                        <Calendar 
                            className="w-full p-inputtext-sm"
                            value={date} 
                            onChange={(e) => setDate(e.target.value)} 
                            dateFormat={dateFields.releaseDate.format} 
                            readOnlyInput
                        />
                    </div>
                    <div className="field">
                        <label className="flex align-items-center gap-2">
                            <i className={currencyFields.releaseAmount.icon}></i>
                            {currencyFields.releaseAmount.label}
                        </label>
                        <InputNumber
                            className="w-full p-inputtext-sm" 
                            value={amount} 
                            onValueChange={(e) => setAmount(e.target.value)} 
                            mode="currency" 
                            currency={currencyFields.releaseAmount.currency} 
                            locale={currencyFields.releaseAmount.locale} />
                    </div>
                    <div className="field">
                        <label className="flex align-items-center gap-2">
                            <i className={textFields.description.icon}></i>
                            {textFields.description.label}
                        </label>
                        <InputText 
                            className="w-full p-inputtext-sm"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-content-center gap-5">
                        <Button text raised label="Cancelar" severity="danger" icon="pi pi-times" size="small" onClick={clearForm}/>
                        <Button text raised label="Adicionar" severity="success" icon="pi pi-check" size="small" onClick={saveRelease}/>
                    </div>
                </div>
            }
        </>
    );
}