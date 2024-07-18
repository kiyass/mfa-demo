import React, { useEffect } from "react";
import { useLocation, Outlet, NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../routes/router";
import { Layout, Menu } from "antd";

const { Content, Sider, Header } = Layout;

function BasicLayout({ children }) {
  return (
    <Layout style={{ background: "#fff", width: "100%", height: "100%" }}>
      {/* 菜单栏 */}
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu theme="dark" mode="horizontal">
          {routes.map((item) => {
            return (
              <Menu.Item key={item.name}>
                <NavLink to={item.path}>
                  <span>{item.name}</span>
                </NavLink>
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default BasicLayout;
