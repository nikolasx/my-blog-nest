/*
 * @Author: g05047
 * @Date: 2020-12-27 00:27:41
 * @LastEditors: g05047
 * @LastEditTime: 2021-01-23 23:34:35
 * @Description: file content
 */
import { Button, Card, Checkbox, Form, Input } from 'antd';
import React from 'react';
import styles from './login.module.less';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 19 },
};

export const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <h2>欢迎登陆李雄个人博客系统</h2>
      <Card className={styles.loginBox} title="登录">
        <Form {...layout}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <span>
              如没有账号，请先<a href="/register">注册</a>
            </span>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary">登陆</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
