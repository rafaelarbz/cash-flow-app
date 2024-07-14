import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import CashFlowView from "./views/CashFlowView";
import ErrorView from "./views/ErrorView";
import HomeView from "./views/HomeView";
import LayoutComponent from "./components/layout/LayoutComponent";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutComponent />} errorElement={<ErrorView />}>
      <Route index element={<HomeView />} />
      <Route path="new" element={<CashFlowView />} />
    </Route>
  )
);