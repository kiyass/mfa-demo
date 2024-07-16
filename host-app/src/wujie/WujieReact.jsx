import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import WujieReact from "wujie-react";

export default function ChildApp() {
  // const location = useLocation();
  // const navigation = useNavigate();

  // const path = location.pathname.replace("/app1", ""); // 告诉子应用要跳转哪个路由

  // path && WujieReact.bus.$emit("react17-router-change", path);

  // const props = {
  //   jump: (name) => {
  //     navigation(`/${name}`);
  //   },
  // };

  return (
    <WujieReact
      width="100%"
      height="100%"
      name="app1"
      // sync={!path}
    ></WujieReact>
  );
}
