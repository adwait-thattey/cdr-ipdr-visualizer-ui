import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = ({ obj }) => {
  console.log('object form', obj);
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ watchlistdata: obj['content'] }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Watch List Name"
        name="watchlistname"
        rules={[
          { required: true, message: 'Please input a name for watchlist!' },
        ]}
      >
        <Input defaultValue={obj.name} />
      </Form.Item>

      <Form.Item
        label="Watchlist Data"
        name="watchlistdata"
        rules={[
          {
            required: true,
            message: 'Please input data, each entry of the form type,object',
          },
        ]}
      >
        <Input.TextArea rows={10} />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo;
