import { Route, Routes } from "react-router-dom";
import type { RouterType } from "../types/router.types";
import pagesData from "./pagesData";
import App from "../app/App";

export function AppRoutes() {
  const pageRoutes = pagesData.map(({ path, title, element }: RouterType) => {
    return <Route key={title} path={path} element={element} />;
  });

  return (
    <Routes>
      <Route element={<App />}>
        {pageRoutes}
      </Route>
    </Routes>
  )
};
