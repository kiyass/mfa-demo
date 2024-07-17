import BasicLayout from "../components/BasicLayout/index";

export const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/app-2-1",
        name: "/app-2-1",
      },
      {
        path: "/test",
        name: "/test",
        element: <>test</>,
      },
    ],
  },
];
