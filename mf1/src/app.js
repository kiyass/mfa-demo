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

const App = () => (
  <Suspense fallback="">
    <Page />
  </Suspense>
);

export default App;
