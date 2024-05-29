import { useTranslation } from "react-i18next";

export const useMenu = () => {

    const { t } = useTranslation();

    return {
        home: {
            title: t('menu.home.title'),
            description: t('menu.home.description'),
            href: '/',
            icon: 'pi pi-home'
        },
        newRelease: {
            title: t('menu.newRelease.title'),
            description: t('menu.newRelease.description'),
            href: '/new',
            icon: 'pi pi-plus'
        }
    };
};