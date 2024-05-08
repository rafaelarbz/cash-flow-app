import { PrimeReactProvider } from "primereact/api";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./views/Layout";
import Pong from "./views/Pong";
import Carapmelap from "./views/Carapmelap";
import CashFlowRegister from "./views/CashFlowRegister";

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