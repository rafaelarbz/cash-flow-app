import { useTranslation } from "react-i18next";

export const useFields = () => {

  const { t } = useTranslation();

  return {
    locale: t('fields.locale'),
    enterpriseName: {
      title: t('fields.enterpriseName.title')
    },
    type: {
      title: t('fields.type.title'),
      options: {
        inflow: t('fields.type.options.inflow'),
        outflow: t('fields.type.options.outflow')
      }
    },
    payment: {
      title: t('fields.payment.title'),
      options: {
        card: t('fields.payment.options.card'),
        cash: t('fields.payment.options.cash')
      }
    },
    date: {
      title: t('fields.date.title')
    },
    amount: {
      title: t('fields.amount.title')
    },
    totalAmount: {
      title: t('fields.totalAmount.title')
    },
    infoTotalAmount: {
      title: t('fields.infoTotalAmount.title')
    },
    total: {
      title: t('fields.total.title')
    },
    totals: {
      title: t('fields.totals.title')
    },
    description: {
      title: t('fields.description.title')
    },
    repeatRelease: {
      title: t('fields.repeatRelease.title'),
      description: t('fields.repeatRelease.description')
    },
    totalRepeats: {
      title: t('fields.totalRepeats.title'),
      description: t('fields.totalRepeats.description')
    },
    currency: {
      label: t('fields.currency.label'),
      type: t('fields.currency.type')
    },
    dateFormat: t('fields.dateFormat'),
    timeFormat: t('fields.timeFormat'),
    inputSelect: {
      placeholder: t('fields.inputSelect.placeholder')
    }
  };
};

export const useTotalsStructure = () => { 

  const fields = useFields(); 

  return {
    [fields.type.options.inflow]: {
      'total': 0,
      [fields.payment.options.card]: 0,
      [fields.payment.options.cash]: 0
    },
    [fields.type.options.outflow]: {
      'total': 0,
      [fields.payment.options.card]: 0,
      [fields.payment.options.cash]: 0
    },
    ['netFlow']: {
      'total': 0
    }
  };
}

export const useReleaseColumnsToExport = () => {

  const fields = useFields();

  return [
    { field: 'date', header: fields.date.title },
    { field: 'type', header: fields.type.title },
    { field: 'description', header: fields.description.title },
    { field: 'infoTotalAmount', header: fields.infoTotalAmount.title },
    { field: 'payment', header: fields.payment.title },
    { field: 'amount', header: fields.amount.title }
  ];
}

export const useTotalsInfoLabel = () => {

  const { t } = useTranslation();

  return {
    inflow: {
      total: t('totalsInfoLabel.inflow.total'),
      card: t('totalsInfoLabel.inflow.card'),
      cash: t('totalsInfoLabel.inflow.cash')
    },
    outflow: {
      total: t('totalsInfoLabel.outflow.total'),
      card: t('totalsInfoLabel.outflow.card'),
      cash: t('totalsInfoLabel.outflow.cash')
    },
    netFlow: {
      total: t('totalsInfoLabel.netFlow.total')
    }
  };
};

export const useFunctionalities = () => {

  const { t } = useTranslation();

  return {
    newRealease: t('functionalities.newRealease'),
    listReleases: t('functionalities.listReleases'),
    listReleasesFromEnterprise: t('functionalities.listReleasesFromEnterprise')
  };
};