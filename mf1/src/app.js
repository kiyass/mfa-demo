import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
const BasicLayout = lazy(() => import("./BasicLayout"));
const Page = lazy(() => import("./Page"));

const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "page",
        element: <Page />,
      },
    ],
  },
];

const AppRoutes = () => {
  const element = useRoutes(routes);

  return <>{element}</>;
};

const App = () => (
  <Suspense fallback="">
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 2啊</h2>
      <AppRoutes />
    </div>
  </Suspense>
);

export default App;
