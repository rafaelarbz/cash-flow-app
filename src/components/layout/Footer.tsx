import { Button } from "primereact/button";

interface Footer {}

const Footer: React.FC<Footer> = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ padding: '1rem', background: '#f8f9fa' }}>
          <p>© {currentYear} Cash Flow</p>
          <Button label="Voltar ao topo" />
        </footer>
    );
};

export default Footer;