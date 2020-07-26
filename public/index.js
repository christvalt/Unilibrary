import React, { Component } from "react";
import Home from "../pages/home/home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import More from "../pages/more";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Button } from "antd";
import { Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import { Card, Col, Row } from "antd";
import Header from "../components/header";
import Footer from "../components/footer";

const { Content } = Layout;
class Router extends Component {
  componentDidMount() {}

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/more" component={More} />
      </Switch>
    );
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Layout>
            <Content
              className="content"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 500,
              }}
            >
              {routes}
            </Content>
          </Layout>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default Router;
