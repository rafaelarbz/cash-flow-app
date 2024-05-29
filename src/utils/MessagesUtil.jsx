import { useTranslation } from "react-i18next";

export const useMessage = () => {

    const { t } = useTranslation();

    return {
        errors: {
            noReleasesToExport: {
                title: t('errors.noReleasesToExport.title'),
                message: t('errors.noReleasesToExport.message')
            },
            fieldsRequired: {
                title: t('errors.fieldsRequired.title'),
                message: t('errors.fieldsRequired.message')
            },
            general: {
                title: t('errors.general.title'),
                message: t('errors.general.message')
            }
        },
        alerts: {
            itemAdded: {
                title: t('alerts.itemAdded.title'),
                message: t('alerts.itemAdded.message')
            },
            addEnterprise: {
                title: t('alerts.addEnterprise.title'),
                message: t('alerts.addEnterprise.message')
            },
            generalSuccess: {
                title: t('alerts.generalSuccess.title'),
                message: t('alerts.generalSuccess.message')
            },
            infoRequired: {
                title: t('alerts.infoRequired.title'),
                message: t('alerts.infoRequired.message'),
            },
            confirmRemove: {
                title: t('alerts.confirmRemove.title'),
                message: t('alerts.confirmRemove.message')
            }
        }
    };
};