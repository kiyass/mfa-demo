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
          height: "64px",
          padding: "0 50px",
          color: "rgba(255, 255, 255, 0.65)",
          lineHeight: "64px",
          background: "#001529",
        }}
      >
        {routes.map((item) => {
          return (
            <NavLink
              to={item.path}
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                textDecoration: "none",
                padding: "0 10px",
              }}
            >
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </div>
      <div>{children}</div>
    </div>
  );
}
export default BasicLayout;
