import { Api } from '@client/constant/api';
import { useApi } from '@client/hooks/useApi';
import { Button, Form, Input, message } from 'antd';
import React, { useCallback } from 'react';
import { from } from 'rxjs';
import styles from './register.module.less';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 19 },
};

export const Register: React.FC = () => {
  const [form] = Form.useForm();
  const { apiFetcher } = useApi();

  const handleRegister = useCallback(() => {
    from(form.validateFields()).subscribe(
      (res) => {
        // 用户填写成功
        apiFetcher<{
          code: number;
          message: string;
        }>(Api.USER_REGISTER, {
          method: 'POST',
          body: JSON.stringify(res),
        }).subscribe(([status, data]) => {
          if (status === 201 && data.code === 0) {
            message.success(data.message);
          }
        });
      },
      () => console.log('validate fail'),
    );
  }, []);
  return (
    <div>
      <h2>欢迎注册李雄个人博客系统</h2>
      <div className={styles.content}>
        <Form {...layout} form={form}>
          <Form.Item
            name="email"
            label="邮件地址"
            rules={[
              {
                type: 'email',
                message: '请输入正确的邮箱地址！',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="用户名"
            name="userName"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '密码不能为空',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="confirm"
            rules={[
              {
                required: true,
                message: '确认密码不能为空！',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('密码和确认密码必须一致!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" onClick={handleRegister}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
