import React17 from "../pages/app-1-1";
import BasicLayout from "../components/BasicLayout/index";

export const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/app-1-1",
        name: "/app-1-1",
        element: <React17 />,
      },
      {
        path: "/test",
        name: "/test",
        element: <>test</>,
      },
    ],
  },
];
