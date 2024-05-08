import { PrimeReactProvider } from "primereact/api";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./views/Layout";
import Pong from "./views/Pong";
import Carapmelap from "./views/Carapmelap";
import CashFlowRegister from "./views/CashFlowRegister";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
// import '../node_modules'
// import 'primeicons/primeicons.css'; //icons
// import 'primeflex/primeflex.css'; // flex

const App: React.FC = () => {

  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CashFlowRegister />}/>
            <Route path="ping" element={<Pong />}/>
            <Route path="carapmelap" element={<Carapmelap />}/>
          </Route>
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
};

export default App;