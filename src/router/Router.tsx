import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pages/404/404";
import { routes } from "./routes";

const Router = () => {
  return (
    <Routes>
      {routes.map(route => <Route path={route.url} element={route.page} />)}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}


export default Router