import React from "react";

import { Button, Layout } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;
class Readbook extends React.Component {
  state = {
    size: "large",
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Layout>
        <Header
          className="readbook_head"
          style={{
            backgroundColor: "white",
            border: "none",
            height: 50,
            display: "inlineBlock",
            margin: 0,
            paddingBottom: 0,
          }}
        >
          <div className="down_info" style={{}}>
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size={size}
            >
              Download
            </Button>

            <Button
              class="info_btn"
              style={{
                width: "50",
                borderRadius: 25,
              }}
            >
              <Link to={`/alert_infoBook `} activeClassName="current">
                info
              </Link>
            </Button>
            <Button type="dashed" icon={<SearchOutlined />} shape="round">
              Search inside
            </Button>
          </div>
        </Header>
        <Content>
          <div
            className="read"
            style={{
              backgroundColor: "",
            }}
          >
            Loading Book
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Readbook;
