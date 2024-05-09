import { fields } from "./CashFlowUtil";

export const formFields = {
    selectFields: {
        type: {
            label: `${fields.type.title} *`,
            placeholder: 'Selecione',
            icon: 'pi pi-flag',
            options: [
                { value: 'inflow', label: `${fields.type.options.inflow}`, icon: 'pi pi-arrow-down-left'},
                { value: 'outflow', label: `${fields.type.options.outflow}`, icon: 'pi pi-arrow-up-right'}
            ]
        },
        payment: {
            label: `${fields.payment.title} *`,
            placeholder: 'Selecione',
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
            label: `${fields.description.title}`,
            icon: 'pi pi-info-circle'
        }
    },
    inputCurrencyFields: {
        releaseAmount: {
            label: `${fields.amount.title} *`,
            icon: 'pi pi-receipt',
            currency: 'BRL',
            locale: 'pt-BR'
        }
    },
    dateFields: {
        releaseDate: {
            label: `${fields.date.title} *`,
            icon: 'pi pi-calendar',
            format: 'dd/mm/yy'
        }
    }
};