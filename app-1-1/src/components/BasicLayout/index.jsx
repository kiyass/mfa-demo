import React from "react";
import { Link, Outlet } from "react-router-dom";
import { routes } from "../../routes/router";
import { Layout, Menu } from "antd";

const { Content, Sider, Header } = Layout;
const { SubMenu } = Menu;

function BasicLayout(props) {
  return (
    <Layout style={{ background: "#fff", width: "100%", height: "100%" }}>
      {/* 菜单栏 */}
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu theme="dark" mode="horizontal">
          {routes[0].children.map((item, menuIdx) => {
            if (item.children instanceof Array) {
              return (
                <SubMenu
                  key={item.name}
                  title={
                    <span>
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.children.map((subItem, subItemIdx) => (
                    <Menu.Item key={subItem.name}>
                      <Link to={subItem.path}>{subItem.name}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.name}>
                  <Link to={item.path}>
                    <span>{item.name}</span>
                  </Link>
                </Menu.Item>
              );
            }
          })}
        </Menu>
      </Header>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
export default BasicLayout;
