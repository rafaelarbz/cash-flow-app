import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./views/Layout";
import CashFlowView from "./views/CashFlowView";
import ErrorView from "./views/ErrorView";
import HomeView from "./views/HomeView";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorView />}>
      <Route index element={<HomeView />} />
      <Route path="new" element={<CashFlowView />} />
    </Route>
  )
);