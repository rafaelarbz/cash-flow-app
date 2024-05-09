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