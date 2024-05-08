import { PrimeReactProvider } from "primereact/api";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./views/Layout";
import Pong from "./views/Pong";
import Carapmelap from "./views/Carapmelap";
import CashFlowRegister from "./views/CashFlowRegister";

interface App {}

const App: React.FC<App> = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Layout>
          <Route index element={<CashFlowRegister />}/>
          <Route path="ping" element={<Pong />}/>
          <Route path="carapmelap" element={<Carapmelap />}/>
        </Layout>
      </Route>
    )
  );

  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );
};

export default App;