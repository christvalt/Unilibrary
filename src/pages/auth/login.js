import React from "react";
import "antd/dist/antd.css";

import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col, Card } from "antd";
// there is no container component antd, please read docs
//bootstrap  examples will not work on antd
//read this https://www.w3schools.com/html/html_images.asp
//after

function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      className="login"
      style={{
        padding: 100,
        margin: 50,
        minHeight: 500,
      }}
    >
      <Row justify={"center"} align={"center"}>
        <Col span={12}>
          <Card className="loginnn">
            <legend classname="titlelogin" Style={{}}>
              <h1 className="h1title">UniLibrary!!!</h1>
              <h3 className="h3title">Login</h3>
              Login using your UniLibrary account
            </legend>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="./signup">register now!</a>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
//ReactDOM.render(<Login />, document.getElementById("container"));

export default Login;
