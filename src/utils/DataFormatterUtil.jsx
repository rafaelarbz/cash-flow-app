export const formatCurrency = (amount, locale, currency) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(amount);
};

export const formatDate = (date, locale) => {
    return new Intl.DateTimeFormat(locale).format(date);
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