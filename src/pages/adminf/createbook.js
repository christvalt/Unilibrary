import React from "react";
import { List } from "antd/lib/form/Form";

function Createbook() {
  return (
    <div className="header" style={{ display: "block", float: "left" }}>
      <h1>Add New Book</h1>
      <h3 style={{}}>
        <a href="#Book">Book</a> {""} /{""} <a href="#Book">New Book</a>
      </h3>

      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="note"
          label="Note"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Createbook;
