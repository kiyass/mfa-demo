// import React17 from "../pages/child-app";
import BasicLayout from "../components/BasicLayout/index";

export const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/app-1-1-1",
        name: "/app-1-1-1",
        element: <>test11</>,
      },
      {
        path: "/test",
        name: "/test",
        element: <>test</>,
      },
    ],
  },
];
