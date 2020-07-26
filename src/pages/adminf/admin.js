import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

import { Layout, Menu, Breadcrumb, Avatar } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Admin extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const adminstyle = {
      display: "flex",
      height: "calc(100%-66%)",
    };

    return (
      <div clssName="admin-wrapper" style={adminstyle}>
        <Layout style={{ minHeight: "100vh" }}>
          <div className="sider " style={{ float: "left" }}>
            {" "}
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              collapsedWidth="90"
              width="220"
            >
              <div>
                <Avatar
                  style={{ float: "center" }}
                  icon={<UserOutlined />}
                  src="./user.png"
                  size={60}
                />
                <h4 style={{ color: "white" }}>my name</h4>
                <a
                  class="exp"
                  href="#"
                  style={{
                    ratio: 3,
                    fontSize: 18,
                  }}
                >
                  Admin
                </a>

                <br></br>
                <br></br>
              </div>
              <div className="sider_content">
                <h2
                  float="left"
                  style={{ color: "white", float: "left", marginLeft: 10 }}
                >
                  ACTIONS
                </h2>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <Menu.Item key="1">
                    <Link to={`/.dashboard.js`} activeClassName="current">
                      Dashboard
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="2"> Manage Users</Menu.Item>

                  <SubMenu key="sub1" title="BOOkS">
                    <Menu.Item key="4">
                      <Link to={`/list_book.js`} activeClassName="current">
                        List Books
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to={"/createbook"} activeClassName="current">
                        ADD BOOK
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                      <Link to={`/delete_book.js`} activeClassName="current">
                        DELETE BOOK
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title="Manage Post">
                    <Menu.Item key="6">
                      <Link to={`/dashboard`} activeClassName="current">
                        team1
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                      <Link to={`/dashboard`} activeClassName="current">
                        team2
                      </Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </div>
            </Sider>{" "}
          </div>
          {/*<Header className="header">          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
    </Header>*/}

          <Layout className="site-layout">
            <Content style={{ margin: "0 16px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                add content
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
export default Admin;
