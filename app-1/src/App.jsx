import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { routes } from "./routes/router";

const AppRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
