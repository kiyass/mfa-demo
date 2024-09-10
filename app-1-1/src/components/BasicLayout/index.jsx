import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/router";

function BasicLayout({ children }) {
  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // height: "64px",
          padding: "0 50px",
          color: "rgba(255, 255, 255, 0.65)",
          lineHeight: "64px",
          background: "#001529",
          flexWrap: "wrap",
        }}
      >
        {routes.map((item) => {
          return (
            <NavLink
              to={item.path}
              key={item.path}
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                textDecoration: "none",
                padding: "0 10px",
                display: "inline-block",
                // minWidth: "100px",
                // textAlign: "center",
              }}
            >
              <span>{item.name}</span>
            </NavLink>
          );
        })}
        <Button variant="contained" color="primary" style={{ marginLeft: 20 }}>
          Contained
        </Button>
        <button
          style={{
            background: "#008eff",
            color: "#fff",
            borderRadius: "3px",
            border: "none",
            margin: "0 6px",
          }}
          onClick={() => {
            // 应用间跳转测试(可行)
            window.rawWindow.history.pushState({}, "_", "/app4/app-1-2/mf3");
            window.rawWindow.dispatchEvent(
              new PopStateEvent("popstate", window.rawWindow.history.state)
            );
          }}
        >
          V {window.React.version}
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}
export default BasicLayout;
