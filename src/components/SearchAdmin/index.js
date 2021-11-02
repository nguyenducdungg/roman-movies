import React, { useState, useEffect } from "react";
import { Modal } from "antd";

import {
  Button,
  Card,
  DatePicker,
  Input,
  Form,
  InputNumber,
  Radio,
  Select,
  Tooltip,
  Checkbox,
} from "antd";
const FormItem = Form.Item;
const { Option } = Select;
const { TextArea } = Input;

const SearchForm = (props) => {
  const { placeholderText, onSubmit, type } = props;
  const [form] = Form.useForm();

  const onFinish = async (params) => {
    // console.log('onFinish', params);
    if (onSubmit) onSubmit(params);
  };

  return (
    <Form
      // hideRequiredMark
      style={{
        marginTop: 8,
        width: "100%",
      }}
      form={form}
      name="basic"
      initialValues={{}}
      onFinish={onFinish}
      layout="inline"
      onValuesChange={(params) => {
        console.log("....", params.search);
        if (params.search !== null && params.search.length === 0) onFinish();
      }}
      // onFinishFailed={onFinishFailed}
    >
      <FormItem name="search">
        <Input type={type} allowClear={true} placeholder={placeholderText} />
      </FormItem>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Tìm kiếm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchForm;
