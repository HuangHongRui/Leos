var Rx = require('rxjs/Rx');
import * as React from 'react';
import { Form, Input, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchSign, fetchCaptcha, setCaptchaCountdown } from '../../redux/action';
import { connect } from 'react-redux';
import judge from '../../utils/judgement';

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
    justify-content: start;
  }
  .gotCaptcha {
    width: 100%;
  }
`;

// tslint:disable-next-line
class SignComponent extends React.Component<any> {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    email: '',
    captchaTime: 0
  };

  static getDerivedStateFromProps(nextProps: StatePropsTypes, prevState: StatePropsTypes): void | {} {
    if (nextProps !== prevState) {
      return { captchaTime: nextProps.generalData.captchaTime };
    }
  }

  // componentDidMount() {}

  handleCaptcha = () => {
    let regexp = new RegExp(judge.email);
    if (regexp.test(this.state.email)) {
      this.props.fetchCaptcha(this.state.email);
      this.props.setCaptchaCountdown(60);
      let interval = Rx.Observable
        .timer(0, 1000)
        .scan((count: number) => count - 1, 10);
      let sub = interval.subscribe((i: number) => {
        if (i < 0) {
          sub.unsubscribe();
        } else {
          this.props.setCaptchaCountdown(i);
        }
      });
    } else {
      this.props.form.validateFieldsAndScroll();
    }
  }

  handleSubmit = (e: { preventDefault: Function }) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err: {}, values: {}) => {
      if (!err) {
        // tslint:disable-next-line
        console.log('Received values of form: ', values);
        this.props.fetchSign(values);
      }
    });
  }

  // tslint:disable-next-line
  handleConfirmBlur = (e: any) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  // tslint:disable-next-line
  compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('您输入的密码与上面密码不一致!');
    } else {
      callback();
    }
  }

  // tslint:disable-next-line
  validateToNextPassword = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback();
    } else if (value.length < 7 || value.length > 15) {
      callback('密码长度必须 8～16 位');
    } else if (!/[A-Z]+/.test(value)) {
      callback('至少包含一个大写字母');
    } else if (!/[a-z]+/.test(value)) {
      callback('至少包含一个小写字母');
    } else if (!/[\d+]+/.test(value)) {
      callback('至少包含一个数字');
    } else {
      callback();
    }
  }

  // tslint:disable-next-line
  handleEmailChange = (value: any) => {
    let autoCompleteResult: string[];
    if (value.indexOf('@') > -1) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [
        '@qq.com', '@gmail.com',
        '@163.com', '@hotmail.com',
        '@sina.com', '@126.com'
      ].map(domain => `${value}${domain}`);
    }
    this.setState({
      autoCompleteResult,
      email: value
    });
  }

  render() {
    const FormItem = Form.Item;
    const AutoCompleteOption = AutoComplete.Option;
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const captchaTime = this.state.captchaTime;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 24,
          offset: 0
        }
      }
    };

    const emailOptions = autoCompleteResult.map(email => (
      <AutoCompleteOption key={email}>{email}</AutoCompleteOption>
    ));

    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit} className="sign-form">
          <FormItem
            {...formItemLayout}
            label="账号邮箱"
            hasFeedback={true}
          >
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: '请输入正确 E-mail 格式!'
              }, {
                required: true, message: '请输入您的 E-mail!'
              }],
            })(
              <AutoComplete
                // tslint:disable-next-line
                dataSource={emailOptions as any}
                onChange={this.handleEmailChange}
                placeholder="示例: h-hr@qq.com"
              >
                <Input/>
              </AutoComplete>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="账号密码"
            hasFeedback={true}
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请设置您的密码!'
              }, {
                validator: this.validateToNextPassword
              }]
            })(
              <Input type="password" placeholder="8~16位数字与大小字母组合"/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="确认密码"
            hasFeedback={true}
          >
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请确认您的密码!'
              }, {
                validator: this.compareToFirstPassword
              }]
            })(
              <Input type="password" placeholder="8~16位数字与大小字母组合" onBlur={this.handleConfirmBlur}/>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="验证码"
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入你收到的验证码!' }]
                })(
                  <Input placeholder="邮箱验证码"/>
                )}
              </Col>
              <Col span={12}>
                <Button
                  className="gotCaptcha"
                  disabled={!new RegExp(judge.email).test(this.state.email) || captchaTime ? true : false}
                  onClick={this.handleCaptcha}
                >
                  {
                    captchaTime
                      ? `等待${captchaTime}秒可重发`
                      : '获取验证码'
                  }
                </Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked'
            })(
              <Checkbox>我已阅读并且同意
                <Link to="/agreement">《注册协议》</Link>
              </Checkbox>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="sign-form-button">确认注册</Button>
            <Button type="default" htmlType="submit" className="sign-form-button">
              <Link to="/login">返回登录</Link>
            </Button>
          </FormItem>
        </Form>
      </Wrap>
    );
  }
}

// tslint:disable-next-line
let Sign = Form.create()(SignComponent as any);
export default connect(
  // tslint:disable
  ((e) => e),
  { fetchSign, fetchCaptcha, setCaptchaCountdown }
  // tslint:disable-next-line
)(Sign as any);

interface StatePropsTypes {
  generalData: {
    captchaTime: number;
  }
}