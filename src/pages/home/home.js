import React from "react";

import { Layout, Button, Form, Input, Checkbox } from "antd";
import { Card, Col, Row } from "antd";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 30,
      color: "#1890ff",
    }}
  />
);

function Home() {
  const { Header, Footer, Content } = Layout;

  return (
    <div className="home">
      <div className="searhcbar">
        <Search
          className="makeit"
          placeholder="search for books,articles and more..."
          onSearch={(value) => console.log(value)}
          enterButton
        />
      </div>
      <div className="App-slider">
        <Carousel autoplay="true " effect="fade">
          <div>
            <img
              class="d-block w-80"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg"
              alt="First slide"
            ></img>
          </div>
          <div>
            <img
              class="d-block w-80"
              src="./imfond.jpg"
              alt="Second slide"
            ></img>
          </div>
          <div>
            <img
              class="d-block w-80"
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
              alt="Third slide"
            ></img>
          </div>
          <div>
            <img
              class="d-block w-80"
              src="https://mdbootstrap.com/img/Photos/Others/Carousel-thumbs/img%20(88).jpg"
              alt="four slide"
            ></img>
          </div>
        </Carousel>
        ,
        <div className="site card">
          <Row gutter={[6, 6]} justify="center">
            <Col span={6}>
              <div className="prov">
                <Card bordered={true} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      shape="circle"
                    >
                      <Link to={`/readbook`} activeClassName="current">
                        Read
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      shape="circle"
                    >
                      <Link to={`/readbook`} activeClassName="current">
                        Read
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      shape="circle"
                    >
                      <Link to={`/readbook`} activeClassName="current">
                        Read
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      shape="circle"
                    >
                      <Link to={`/readbook`} activeClassName="current">
                        Read
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <Row gutter={[6, 6]} justify="center">
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      <Link to={`/more`} activeClassName="current">
                        Riserve
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      <Link to={`/more`} activeClassName="current">
                        Riserve
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      <Link to={`/more`} activeClassName="current">
                        Riserve
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
            <Col span={6}>
              <div className="prov">
                <Card bordered={false} size="small" hoverable="true">
                  <div className="im">
                    {<img alt="example" src="./imo.png" />}
                  </div>

                  <div>
                    <h3 className="bookt">Book Title</h3>
                    <div className="small-descrp">
                      <p>
                        small desciption of this book small desciption of this
                        book small desciption of this book
                      </p>
                    </div>
                  </div>
                  <div
                    class="card-action"
                    style={{
                      padding: 5,
                      margin: 0,
                      minHeight: 0,
                    }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      <Link to={`/more`} activeClassName="current">
                        Riserve
                      </Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Home;

/*<Link to={`/`} activeClassName="current">
home
</Link>
*/
/*
 <form>
        <div className="searhcbar">
          <div className="search_box">
            <Form.Item
              name="search"
              rules={[
                {
                  required: true,
                  message: "find your book her!",
                },
              ]}
            >
              <Input
                className="makeit"
                placeholder=" find your book her....."
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="search-btn">
                Search
              </Button>
            </Form.Item>
          </div>
        </div>
      </form>*/
