import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { PrimeReactProvider } from 'primereact/api';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { ToastProvider } from './contexts/ToastContext';

export default function App() {

  return (
    <PrimeReactProvider>
      <ToastProvider>
        <RouterProvider router={routes} />
      </ToastProvider>
    </PrimeReactProvider>
  );
}
