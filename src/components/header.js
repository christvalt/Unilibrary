import React from "react";
import { Layout, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  const { Header } = Layout;

  return (
    <div className="header">
      <div className="projetName">
        <h1 className="projectLo">UnyLibrary</h1>
      </div>
      <Header>
        <div className="divavatar">
          <Button type="primary" style={{ float: "right" }}>
            DASHBOARD
          </Button>
          <Avatar
            style={{ float: "right" }}
            icon={<UserOutlined />}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to={`/`} activeClassName="current">
              home
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/login"} activeClassName="current">
              login
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={"/signup"} activeClassName="current">
              signup
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}

export default Header;
/**<div>
          {" "}
          <Link to={"/chatbox"} activeClassName="current">
            Cchat
          </Link>
        </div> */
