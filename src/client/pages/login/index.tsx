import { Card, Form, Input } from 'antd';
import React from 'react';
import styles from './login.module.less';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};

export const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <Card className={styles.loginBox} title="登录">
        <Form {...layout}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
