import React from 'react';
import { Form, Input, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .sign-form {
    max-width: 80vw;
  }
  .sign-form-button {
    width: 100%;
  }
  .ant-form-item-label {
    display: flex;
    justify-content: space-around;
  }
  .gotcaptcha {
    width: 100%;
  }
`;

const FormItem = Form.Item;
const AutoCompleteOption = AutoComplete.Option;


class Sign extends React.Component<any> {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: {}, values: {}) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e: any) => {
    const value = e.target.value;
    this.setState({confirmDirty: this.state.confirmDirty || !!value});
  }
  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  validateToNextPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true});
    }
    callback();
  }
  handleWebsiteChange = (value: any) => {
    let autoCompleteResult: any;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['@qq.com', '@gmail.com'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }

  render() {

    const {getFieldDecorator} = this.props.form;
    const {autoCompleteResult} = this.state;

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
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 24,
          offset: 0,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit} className="sign-form">
          <FormItem
            {...formItemLayout}
            label="账号邮箱"
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The input is not valid E-mail!',
              }, {
                required: true, message: 'Please input your E-mail!',
              }],
            })(
              <AutoComplete
                dataSource={websiteOptions as any}
                onChange={this.handleWebsiteChange}
                placeholder="示例: h-hr@qq.com"
              >
                <Input/>
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="账号密码"
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }, {
                validator: this.validateToNextPassword,
              }],
            })(
              <Input type="password"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: 'Please confirm your password!',
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{required: true, message: '请输入你收到的验证码!'}],
                })(
                  <Input/>
                )}
              </Col>
              <Col span={12}>
                <Button className="gotcaptcha">获取验证码</Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>我已阅读并且同意
                <Link to="/agreement">《注册协议》</Link>
              </Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="sign-form-button">确认注册</Button>
            <Button type="default" htmlType="submit" className="sign-form-button">
              <Link to='/login'>返回登录</Link>
            </Button>
          </FormItem>
        </Form>
      </Wrap>
    )
  }
}

export default Form.create()(Sign);

