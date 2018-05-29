import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .login-form {
    max-width: 80vw;
  }
  .login-form-forgot {
    float: right;
  }
  .login-form-button {
    width: 100%;
  }
 .ant-form-item-label {
  display: flex;
  justify-content: start;
 }
  `;

class Login extends React.Component<any> {
  handleSubmit = (e: { preventDefault: Function }) => {
    e.preventDefault();
    this.props.form.validateFields((err: object, values: {}) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmPassword = (rule: any, value: any, callback: any) => {
    console.log('☞☞☞ 9527 Login 32', rule);
    console.log('☞☞☞ 9527 Login 32', value);
    console.log('☞☞☞ 9527 Login 32', callback);
    console.log('☞☞☞ 9527 Login 32', 'haha');
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
      },
    };
    const {getFieldDecorator} = this.props.form;
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item
            {...formItemLayout}
            hasFeedback={true}
            validateStatus="success"
            label='账号邮箱'
            required={true}
          >
            {getFieldDecorator('email', {
              rules: [{
                pattern: /^\d+$/
              }, {
                validator: this.handleConfirmPassword
              }]
            })(
              <Input placeholder="示例: h-hr@qq.com"/>
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            hasFeedback={true}
            validateStatus="success"
            label='账号密码'
            required={true}
          >
            {getFieldDecorator('password')(
              <Input type="password" placeholder="8~16位大小字母与数字组合"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我的登录状态</Checkbox>
            )}
            <Link className="login-form-forgot" to='/forgetPwd'>密码忘记了!</Link>
            <Button type="primary" htmlType="submit" className="login-form-button">
              确定登录
            </Button>
            <Button type="default" htmlType="submit" className="login-form-button">
              <Link to='/sign'>注册账号</Link>
            </Button>
          </Form.Item>
        </Form>
      </Wrap>
    );
  }
}

export default Form.create()(Login);
