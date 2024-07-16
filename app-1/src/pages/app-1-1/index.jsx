import React from "react";
import hostMap from "../../hostMap";
import WujieReact from "wujie-react";
import { useNavigate, useLocation } from "react-router-dom";
const { bus } = WujieReact;
export default function React17() {
  const location = useLocation();
  const navigation = useNavigate();
  const appUrl = hostMap("//localhost:2011/");
  const path = location.pathname.replace("/app-1-1", "");
  path && bus.$emit("app-1-1-router", path);
  const props = {
    jump: (name) => {
      navigation(`/${name}`);
    },
  };
  return (
    // 保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化
    <WujieReact
      width="100%"
      height="100%"
      name="app-1-1"
      url={appUrl}
      sync={!path}
      props={props}
    />
  );
}
