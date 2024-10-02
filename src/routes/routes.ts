import { Home } from "@/pages/home"
import { RegisterTransactions } from "@/pages/register-transactions"
import { useTranslations } from "@/translations/translations"

export interface IRoute {
    name: string
    path: string
    visible: boolean
    element: JSX.Element
}

const getRoutes = (t: any): IRoute[] => [
    {
        name: t.navigation.home,
        path: '/',
        visible: true,
        element: Home
    },
    {
        name: t.navigation.transactions,
        path: '/transactions',
        visible: false,
        element: Home
    },
    {
        name: t.navigation.registerTransactions,
        path: '/transactions/new',
        visible: true,
        element: RegisterTransactions
    }
]

export const useRoutes = () => {
    const translations = useTranslations();
    return getRoutes(translations);
}