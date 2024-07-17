import BasicLayout from "../components/BasicLayout/index";

export const routes = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/mui5",
        name: "/mui5",
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
