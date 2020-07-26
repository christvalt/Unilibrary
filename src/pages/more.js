import React from "react";
import { Card } from "antd";

import { Row, Col, Button, Form, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
//import Form from "antd/lib/form/Form";

// 12
// 6 6
// 12 12
//medjo@gmail.com
//url:dev.gcequiz.com
//pass:1234567890
function More() {
  return (
    <div className="moreinfo-book" style={{}}>
      <Row style={{ height: 1000 }}>
        <div className="left-part">
          <Col span={6}>
            <div
              className="image"
              style={{
                width: 250,
                height: 500,
                float: "left",
                marginTop: 100,
              }}
            >
              <img src="./imo.png" />
              <br></br>
              <br></br>
              <div className="reser-form">
                <Form>
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
              </div>
            </div>
          </Col>
        </div>

        <div className="right-part">
          <Col span={100}>
            book desciption
            <h2>
              <p className="title-book">lORD OF THE RINGS</p>
            </h2>
            <br></br>
            <span style={{ textAlign: "center" }}>
              <h3>
                {" "}
                In the aftermath of Hurricane Maria, inspiration can be
                difficult to find in Puerto Rico, a US territory where daily
                headlines are negative and politics remain divisive. Quality
                decision making has never been more important and,
                unfortunately, at times, difficult to find. However, business
                opportunities will emerge as the Island restructures its
                economic foundations and institutional landscape. Price includes
                4% B2B tax
              </h3>
            </span>
            <div className="state_document">
              <tab className="tab">
                <h1 className="tab_title">State of book</h1>
                <tr>
                  <td
                    style={{
                      fontWeight: "bold",
                      fontSize: 10,
                      fontFamily: "Times New Roman",
                    }}
                  >
                    <h2>Disponible</h2>
                  </td>
                  <td>
                    <Avatar
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src="./n.jpg"
                    />
                  </td>
                  <td>
                    <Avatar
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src="./n.jpg"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <h2>Booked</h2>
                  </td>
                  <td>
                    <Avatar
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src="./f.jpg"
                    />
                  </td>
                  <td>
                    <Avatar
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src="./n.jpg"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>Solo in lettura interna</h2>
                  </td>
                  <td>
                    <Avatar
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src="./n.jpg"
                    />
                  </td>
                  <td>
                    <Avatar
                      style={{ float: "right" }}
                      icon={<UserOutlined />}
                      src="./n.jpg"
                    />
                  </td>
                </tr>
              </tab>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default More;
/*import React from "react";
import { Card } from "antd";

import { Row, Col, Button, Form } from "antd";
//import Form from "antd/lib/form/Form";

// 12
// 6 6
// 12 12
//medjo@gmail.com
//url:dev.gcequiz.com
//pass:1234567890
function More() {
  return (
    <div className="moreinfo-book">
      <Row justify="space-around">
        <div className="left-part">
          <Col span={12}>
            <div
              className="image"
              style={{ width: 10, height: 15, float: "left" }}
            >
              <img src="./imo.png" />
              <div className="reserpalce">
                <Form>
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
              </div>
            </div>
          </Col>
        </div>

        <div className="right-part">
          <Col span={12}>
            book desciption
            <h2>
              <p>How Hurricane Maria Forges PR’s Economic Future $13,400.00</p>
            </h2>
            <br></br>
            <br></br>
            <>
              <div classNane="popo" style={{ height: 3 }}>
                <p>
                  <h3>
                    In the aftermath of Hurricane Maria, inspiration can be
                    difficult to find in Puerto Rico, a US territory where daily
                    headlines are negative and politics remain divisive. Quality
                    decision making has never been more important and,
                    unfortunately, at times, difficult to find. However,
                    business opportunities will emerge as the Island
                    restructures its economic foundations and institutional
                    landscape. Price includes 4% B2B tax
                  </h3>
                </p>
              </div>
            </>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default More;
 */
