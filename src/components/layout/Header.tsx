interface Header {}

const Header: React.FC<Header> = () => {
    return (
        <header style={{ padding: '1rem', background: '#f8f9fa' }}>
          <h1>Meu Aplicativo</h1>
        </header>
    );
};

export default Header;

