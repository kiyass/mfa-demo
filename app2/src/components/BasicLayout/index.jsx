import React, { memo } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/router";

const { Content, Sider } = Layout;

function BasicLayout({ children }) {
  return (
    <Layout style={{ background: "#fff", width: "100%", height: "100%" }}>
      {/* 菜单栏 */}
      <Sider trigger={null} collapsible={true}>
        <Menu theme="dark" mode="inline">
          {routes.map((item) => {
            return (
              <Menu.Item key={item.name}>
                <Link to={item.path}>
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
export default memo(BasicLayout);
