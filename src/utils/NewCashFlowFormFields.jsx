export const formFields = {
    selectFields: {
        type: {
            label: 'Tipo de Lançamento *',
            placeholder: 'Selecione',
            icon: 'pi pi-flag',
            options: [
                { value: 'inflow', label: 'Entrada', icon: 'pi pi-arrow-down-left'},
                { value: 'outflow', label: 'Saída', icon: 'pi pi-arrow-up-right'}
            ]
        },
        payment: {
            label: 'Forma de Pagamento *',
            placeholder: 'Selecione',
            icon: 'pi pi-wallet',
            options: [
                { value: 'cash', label: 'Dinheiro', icon: 'pi pi-money-bill'},
                { value: 'card', label: 'Cartão', icon: 'pi pi-credit-card'},
            ]
        },
    },
    inputTextFields: {
        enterpriseName: {
            label: 'Empreendimento *',
            icon: 'pi pi-shop'
        },
        description: {
            label: 'Descrição',
            icon: 'pi pi-info-circle'
        }
    },
    inputCurrencyFields: {
        releaseAmount: {
            label: 'Valor *',
            icon: 'pi pi-receipt',
            currency: 'BRL',
            locale: 'pt-BR'
        }
    },
    dateFields: {
        releaseDate: {
            label: 'Data *',
            icon: 'pi pi-calendar',
            format: 'dd/mm/yy'
        }
    }
};