import { useFields } from "./CashFlowUtil";

export const useFormFields = () =>  {

    const fields = useFields();

    return {
        selectFields: {
            type: {
                label: `${fields.type.title} *`,
                placeholder: fields.inputSelect.placeholder,
                icon: 'pi pi-flag',
                options: [
                    { value: 'inflow', label: `${fields.type.options.inflow}`, icon: 'pi pi-arrow-down-left'},
                    { value: 'outflow', label: `${fields.type.options.outflow}`, icon: 'pi pi-arrow-up-right'}
                ]
            },
            payment: {
                label: `${fields.payment.title} *`,
                placeholder: fields.inputSelect.placeholder,
                icon: 'pi pi-wallet',
                options: [
                    { value: 'cash', label: `${fields.payment.options.cash}`, icon: 'pi pi-money-bill'},
                    { value: 'card', label: `${fields.payment.options.card}`, icon: 'pi pi-credit-card'},
                ]
            },
        },
        inputTextFields: {
            enterpriseName: {
                label: `${fields.enterpriseName.title} *`,
                icon: 'pi pi-shop'
            },
            description: {
                label: `${fields.description.title} *`,
                icon: 'pi pi-info-circle'
            }
        },
        inputCurrencyFields: {
            releaseAmount: {
                label: `${fields.amount.title} *`,
                icon: 'pi pi-receipt',
                currency: fields.currency.type,
                locale: fields.locale
            },
            totalReleaseAmount: {
                label: fields.totalAmount.title,
                icon: 'pi pi-receipt',
                currency: fields.currency.type,
                locale: fields.locale
            }
        },
        dateFields: {
            releaseDate: {
                label: `${fields.date.title} *`,
                icon: 'pi pi-calendar',
                format: fields.dateFormat
            }
        },
        inputNumber: {
            totalRepeats: {
                label: `${fields.totalRepeats.title} *`,
                description: fields.totalRepeats.description,
                icon: 'pi pi-plus'
            }
        },
        inputBoolean: {
            repeatRelease: {
                label: fields.repeatRelease.title,
                description: fields.repeatRelease.description,
                icon: 'pi pi-sync'
            }
        }
    };
};