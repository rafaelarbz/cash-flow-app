import { useTranslation } from "react-i18next";

export const useGeneralForm = () => {

    const { t } = useTranslation();

    return {
        buttons: {
            cancel: t('buttons.cancel'),
            confirm: t('buttons.confirm'),
            add: t('buttons.add'),
            remove: t('buttons.remove'),
            save: t('buttons.save'),
            delete: t('buttons.delete'),
            back: t('buttons.back'),
            submit: t('buttons.submit'),
            edit: t('buttons.edit'),
            search: t('buttons.search')
        }
    };
};