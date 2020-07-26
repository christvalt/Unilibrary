import React from "react";
import { Row, Col, Divider } from "antd";
import { Layout, Button } from "antd";

function Footer() {
  const { Footer } = Layout;
  const style = { padding: "8px 0" };
  return (
    <div className="footer">
      <>
        <Footer />
        <div className="contaner">
          <div className="effect"></div>
          <div
            className="row"
            style={{
              border: 10,
              height: 50,
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <div style={style}>
                  <h3>
                    <a href="/customer space/">Your customer accounts</a>
                  </h3>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>
                  <h3>
                    <a href="/info.html">General conditions of acquisition</a>
                  </h3>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>
                  <h3>
                    <a href="/bookseller.html">Bookseller point</a>
                  </h3>
                </div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div style={style}>
                  <h3>
                    <a href="/contactus.html">Contact us</a>
                  </h3>
                </div>
              </Col>
            </Row>
          </div>
          <Divider
            orientation="center"
            style={{ color: "#333", fontWeight: "normal" }}
          >
            <p class="text-center text-bold">
              Unilibry, one address, more than 2,500 Bookstoress
            </p>
          </Divider>
        </div>
      </>
    </div>
  );
}

export default Footer;
