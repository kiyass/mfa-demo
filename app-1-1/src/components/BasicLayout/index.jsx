import React, { useEffect } from "react";
import { useLocation, Outlet, NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../routes/router";
import { Layout, Menu } from "antd";

const { Content, Sider, Header } = Layout;
const { SubMenu } = Menu;

function BasicLayout(props) {
  const navigate = useNavigate();
  // 主应用告诉子应用跳转路由
  // WUJIE
  // useEffect(() => {
  //   // eslint-disable-next-line
  //   const routerJump = (path) => navigate(path);
  //   window.$wujie?.bus.$on("app-1-1-router", routerJump);
  //   // TODO delete routerJump
  // }, []);
  const location = useLocation();
  useEffect(() => {
    window.$wujie?.bus.$emit("sub-route-change", "app-1-1", location.pathname);
  }, [location]);
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
                      <NavLink to={subItem.path}>{subItem.name}</NavLink>
                    </Menu.Item>
                  ))}
                </SubMenu>
              );
            } else {
              return (
                <Menu.Item key={item.name}>
                  <NavLink to={item.path}>
                    <span>{item.name}</span>
                  </NavLink>
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
