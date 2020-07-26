import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

function Signup() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      className="signup-container.total"
      style={{
        padding: 150,
        //margin: 50,
        // minHeight: 500,
      }}
    >
      <Card>
        <Row justify={"center"} align={"center"}>
          <Col span={12}>
            <div className="iside-container">
              <div>
                <h2 class="uk-h4 uk-text-center">
                  Signup to start riservation
                </h2>
                <br></br>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Email"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Name!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      type="Name"
                      placeholder="Name"
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="password"
                    />
                    <br></br>
                    <br></br>

                    <Form.Item
                      name="confirm password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your confirm password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="confirm password"
                        placeholder="confirm password"
                      />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      SIGN IN
                    </Button>
                  </Form.Item>
                </Form>
                <a href="/signin">Already have an account ? Sign</a>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
//ReactDOM.render(<Login />, document.getElementById("container"));

export default Signup;
