import '@/global.css'
import '../node_modules/flag-icons/css/flag-icons.min.css';
import { AppRoutesProvider } from "@/routes/app-routes-provider"
import { ThemeProvider } from "@/components/common/theme-provider"
import { Layout } from "@/components/layout"
import { I18nextProvider } from 'react-i18next'
import i18n from '@/i18n'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="cashflow-ui-theme">
      <I18nextProvider i18n={i18n}>
        <Layout>
          <AppRoutesProvider />
        </Layout>
      </I18nextProvider>
    </ThemeProvider>
  )
}
