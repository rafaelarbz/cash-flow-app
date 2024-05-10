export const formatCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

export const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
};

export const formatFileName = (name) => {
    return name.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, '_')
    .toLowerCase();
};

export const formatColumnsToExport =  (values) => {
    return values.map((col) => ({
        title: col.header, 
        dataKey: col.field 
    }));
};