import React, { Component } from "react";
import Home from "../pages/home/home";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import More from "../pages/more";
import Admin from "../pages/adminf/admin";
import Listbook from "../pages/adminf/listbook";
import Readbook from "../pages/readbook";
import Alert_infoBook from "../pages/alert_infoBook";
import Chatbox from "../components/chatbox";
import Createbook from "../pages/adminf/createbook";

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
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/listbook" component={Listbook} />
        <Route exact path="/readbook" component={Readbook} />
        <Route exact path="/alert_infoBook" component={Alert_infoBook} />
        <Route exact path="/chatbox" component={Chatbox} />
        <Route exact path="/createbook" component={Createbook} />
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
                padding: 20,
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
