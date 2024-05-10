import { createContext, useContext, useRef } from 'react';
import { Toast } from 'primereact/toast';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
    const toastRef = useRef(null);

    const showToast = (severity="contrast", summary, detail, life = 3000) => {
        toastRef.current.show({ severity, summary, detail, life });
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            <Toast ref={toastRef} />
            {children}
        </ToastContext.Provider>
    );
}