import { useEffect, useState } from "react";
import { useFormFields } from "../../utils/CashFlowFormFieldsUtil";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { useToast } from '../../contexts/ToastContext';
import { useFields } from "../../utils/CashFlowUtil";
import { formatCurrency, formatDate } from "../../utils/DataFormatterUtil";
import { useMessage } from "../../utils/MessagesUtil";
import { useGeneralForm } from "../../utils/GeneralFormUtil";

export default function FormNewCashFlowComponent({onTitleChange, onReleaseChange, selectedId}) {
    const { showToast } = useToast();
    const formFields = useFormFields();
    const fields = useFields();
    const messages = useMessage();
    const generalFormLabels = useGeneralForm();
    
    //STATES
    const [releases, setReleases] = useState([]);
    const [type, setType] = useState(null);
    const [payment, setPayment] = useState(null);
    const [date, setDate] = useState(null);
    const [amount, setAmount] = useState(null);
    const [description, setDescription] = useState("");
    const [enterpriseName, setEnterpriseName] = useState("");
    const [confirmEnterpriseName, setConfirmEnterpriseName] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [totalRepeats, setTotalRepeats] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);

    //FORM
    const selectFields = formFields.selectFields;
    const textFields = formFields.inputTextFields;
    const currencyFields = formFields.inputCurrencyFields;
    const dateFields = formFields.dateFields;
    const numberFields = formFields.inputNumber;
    const booleanFields = formFields.inputBoolean;

    useEffect(() => {
        onReleaseChange(releases);
    }, [releases]);

    useEffect(() => {
        if (selectedId) {
            removeRelease(selectedId);
        }
    }, [selectedId]);

    useEffect(() => {
        onTitleChange(enterpriseName);
    }, [enterpriseName]);

    useEffect(() => {
        sumTotalAmount();
    }, [totalRepeats, amount]);
    
    const clearForm = () => {
        setType(null);
        setPayment(null);
        setDate(null);
        setAmount(null);
        setDescription("");
        setRepeat(false);
        setTotalRepeats(null);
        setTotalAmount(null);
    };

    const saveEnterpriseName = () => {
        if (!enterpriseName) {
            setConfirmEnterpriseName(false);
            showToast(
                'warn', 
                messages.alerts.addEnterprise.title, 
                messages.alerts.addEnterprise.message);
        } else {
            setConfirmEnterpriseName(true);
        }
    };

    const saveRelease = () => {
        if (!type || !payment || !date || !amount || !description || repeat && !totalRepeats) {
            showToast(
                'error', 
                messages.errors.fieldsRequired.title, 
                messages.errors.fieldsRequired.message);
            return;
        }
    
        const formattedDate = date ? formatDate(date, fields.locale) : null;
        const formattedAmount = amount ? formatCurrency(amount, fields.locale, fields.currency.type) : null;
        const formattedTotalAmount = totalAmount ? formatCurrency(totalAmount, fields.locale, fields.currency.type) : null;
        const formattedType = type ? getType(type) : null;
        const formattedPayment = payment ? getPayment(payment) : null;
        const infoTotalAmount = totalAmount ? `${totalRepeats} x ${formattedAmount}` : null;

        const release = {
            id: Date.now(),
            type: formattedType,
            payment: formattedPayment,
            date: formattedDate,
            amount: formattedTotalAmount || formattedAmount,
            description: description,
            infoTotalAmount: infoTotalAmount
        };

        setReleases([...releases, release]);
        clearForm();
        showToast(
            'success', 
            messages.alerts.itemAdded.title, 
            messages.alerts.itemAdded.message);
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

    const sumTotalAmount = () => {
        if (totalRepeats > 0) {
            const total = totalRepeats * amount;
            setTotalAmount(total);
        } else {
            setTotalAmount(null);
        }
    };

    return (
        <>
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
                           {messages.alerts.infoRequired.message}
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
                        <label htmlFor="type" className="flex align-items-center gap-2">
                            <i className={selectFields.type.icon}></i>
                            {selectFields.type.label}
                        </label>
                        <Dropdown 
                            id="type"
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
                        <label htmlFor="payment" className="flex align-items-center gap-2">
                            <i className={selectFields.payment.icon}></i>
                            {selectFields.payment.label}
                        </label>
                        <Dropdown 
                            id="payment"
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
                    <div className="flex gap-2 p-fluid">
                        <div className="field flex-auto">
                            <label htmlFor="date" className="flex align-items-center gap-2">
                                <i className={dateFields.releaseDate.icon}></i>
                                {dateFields.releaseDate.label}
                            </label>
                            <Calendar 
                                id="date"
                                className="w-full p-inputtext-sm"
                                value={date} 
                                onChange={(e) => setDate(e.target.value)} 
                                dateFormat={dateFields.releaseDate.format} 
                                readOnlyInput
                            />
                        </div>
                        <div className="field flex-auto">
                            <label htmlFor="amount" className="flex align-items-center gap-2">
                                <i className={currencyFields.releaseAmount.icon}></i>
                                {currencyFields.releaseAmount.label}
                            </label>
                            <InputNumber
                                id="amount"
                                className="w-full p-inputtext-sm" 
                                value={amount} 
                                onValueChange={(e) => setAmount(e.target.value)} 
                                mode="currency" 
                                currency={currencyFields.releaseAmount.currency} 
                                locale={currencyFields.releaseAmount.locale} 
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="description" className="flex align-items-center gap-2">
                            <i className={textFields.description.icon}></i>
                            {textFields.description.label}
                        </label>
                        <InputText
                            id="description" 
                            className="w-full p-inputtext-sm"
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div  className="field">
                        <div className="flex">
                            <label htmlFor="repeatRelease" className="flex align-items-center gap-2 mr-2">
                                <i className={booleanFields.repeatRelease.icon}></i>
                                {booleanFields.repeatRelease.label}
                            </label>
                            <Checkbox 
                                id="repeatRelease" 
                                onChange={(e) => setRepeat(e.checked)} 
                                checked={repeat} 
                                tooltip={booleanFields.repeatRelease.description}
                                tooltipOptions={{ position: 'top' }}
                                />
                        </div>
                    </div>
                    {repeat &&
                        <div className="flex gap-2 p-fluid">
                            <div className="field flex-auto">
                                <label htmlFor="totalRepeats" className="flex align-items-center gap-2">
                                    {numberFields.totalRepeats.label}
                                </label>
                                <InputNumber
                                    id="totalRepeats" 
                                    className="w-full p-inputtext-sm"
                                    value={totalRepeats} 
                                    onValueChange={(e) => setTotalRepeats(e.target.value)}
                                    tooltip={numberFields.totalRepeats.description}
                                    tooltipOptions={{ position: 'mouse', autoHide: false }}
                                />
                            </div>
                            <div className="field flex-auto">
                                <label htmlFor="totalAmount" className="flex align-items-center gap-2">
                                    {currencyFields.totalReleaseAmount.label}
                                </label>
                                <InputNumber
                                    id="totalAmount"
                                    className="w-full p-inputtext-sm" 
                                    value={totalAmount} 
                                    mode="currency" 
                                    currency={currencyFields.totalReleaseAmount.currency} 
                                    locale={currencyFields.totalReleaseAmount.locale} 
                                    readOnly
                                />
                            </div>
                        </div>
                    }
                    <div className="flex justify-content-center gap-5 mt-4">
                        <Button text raised label={generalFormLabels.buttons.cancel} severity="danger" icon="pi pi-times" size="small" onClick={clearForm}/>
                        <Button text raised label={generalFormLabels.buttons.add} severity="success" icon="pi pi-check" size="small" onClick={saveRelease}/>
                    </div>
                </div>
            }
        </>
    );
}