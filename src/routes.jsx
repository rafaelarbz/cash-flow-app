import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./views/Layout";
import ErrorPage from "./views/ErrorPage";
import HomePage  from "./views/HomePage";
import CashFlowPage from "./views/CashFlowPage";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path="/new" element={<CashFlowPage />} />
    </Route>
  )
);