export const fields = {
    enterpriseName: {
        title: 'Empreendimento'
    },
    type: {
        title: 'Tipo de Lançamento',
        options: {
            inflow: 'Entrada',
            outflow: 'Saída'
        }
    },
    payment: {
        title: 'Forma de Pagamento',
        options: {
            card: 'Cartão',
            cash: 'Dinheiro'
        }
    },
    date: {
        title: 'Data'
    },
    amount: {
        title: 'Valor'
    },
    description: {
        title: 'Descrição'
    }
};

export const totalsStructure = { 
    [fields.type.options.inflow]: {
        'total': 0,
        [fields.payment.options.card]: 0,
        [fields.payment.options.cash]: 0
    },
    [fields.type.options.outflow]: {
        'total': 0,
        [fields.payment.options.card]: 0,
        [fields.payment.options.cash]: 0
    }
}

export const releaseColumnsToExport = [
    { field: 'date', header: fields.date.title },
    { field: 'type', header: fields.type.title },
    { field: 'description', header: fields.description.title },
    { field: 'payment', header: fields.payment.title },
    { field: 'amount', header: fields.amount.title }
];

export const totalsInfoLabel = {
    inflow: {
        total: 'Total de Entradas: ',
        card: 'Total de Entradas - Cartão: ',
        cash: 'Total de Entradas - Dinheiro: '
    },
    outflow: {
        total: 'Total de Saídas: ',
        card: 'Total de Saídas - Cartão: ',
        cash: 'Total de Saídas - Dinheiro: '
    }
};