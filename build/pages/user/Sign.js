"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require('rxjs/Rx');
const react_1 = require("react");
const antd_1 = require("antd");
const styled_components_1 = require("styled-components");
const react_router_dom_1 = require("react-router-dom");
const action_1 = require("../../redux/action");
const react_redux_1 = require("react-redux");
const judgement_1 = require("../../utils/judgement");
const Wrap = styled_components_1.default.div `
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
class SignComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            email: '',
            captchaTime: 0
        };
        // componentDidMount() {}
        this.handleCaptcha = () => {
            let regexp = new RegExp(judgement_1.default.email);
            if (regexp.test(this.state.email)) {
                this.props.fetchCaptcha(this.state.email);
                this.props.setCaptchaCountdown(60);
                let interval = Rx.Observable
                    .timer(0, 1000)
                    .scan((count) => count - 1, 10);
                let sub = interval.subscribe((i) => {
                    if (i < 0) {
                        sub.unsubscribe();
                    }
                    else {
                        this.props.setCaptchaCountdown(i);
                    }
                });
            }
            else {
                this.props.form.validateFieldsAndScroll();
            }
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    // tslint:disable-next-line
                    console.log('Received values of form: ', values);
                    this.props.fetchSign(values);
                }
            });
        };
        // tslint:disable-next-line
        this.handleConfirmBlur = (e) => {
            const value = e.target.value;
            this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        };
        // tslint:disable-next-line
        this.compareToFirstPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('您输入的密码与上面密码不一致!');
            }
            else {
                callback();
            }
        };
        // tslint:disable-next-line
        this.validateToNextPassword = (rule, value, callback) => {
            if (!value) {
                callback();
            }
            else if (value.length < 7 || value.length > 15) {
                callback('密码长度必须 8～16 位');
            }
            else if (!/[A-Z]+/.test(value)) {
                callback('至少包含一个大写字母');
            }
            else if (!/[a-z]+/.test(value)) {
                callback('至少包含一个小写字母');
            }
            else if (!/[\d+]+/.test(value)) {
                callback('至少包含一个数字');
            }
            else {
                callback();
            }
        };
        // tslint:disable-next-line
        this.handleEmailChange = (value) => {
            let autoCompleteResult;
            if (value.indexOf('@') > -1) {
                autoCompleteResult = [];
            }
            else {
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
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return { captchaTime: nextProps.generalData.captchaTime };
        }
    }
    render() {
        const FormItem = antd_1.Form.Item;
        const AutoCompleteOption = antd_1.AutoComplete.Option;
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
        const emailOptions = autoCompleteResult.map(email => (react_1.default.createElement(AutoCompleteOption, { key: email }, email)));
        return (react_1.default.createElement(Wrap, null,
            react_1.default.createElement(antd_1.Form, { onSubmit: this.handleSubmit, className: "sign-form" },
                react_1.default.createElement(FormItem, Object.assign({}, formItemLayout, { label: "\u8D26\u53F7\u90AE\u7BB1", hasFeedback: true }), getFieldDecorator('email', {
                    rules: [{
                            type: 'email', message: '请输入正确 E-mail 格式!'
                        }, {
                            required: true, message: '请输入您的 E-mail!'
                        }],
                })(react_1.default.createElement(antd_1.AutoComplete
                // tslint:disable-next-line
                , { 
                    // tslint:disable-next-line
                    dataSource: emailOptions, onChange: this.handleEmailChange, placeholder: "\u793A\u4F8B: h-hr@qq.com" },
                    react_1.default.createElement(antd_1.Input, null)))),
                react_1.default.createElement(FormItem, Object.assign({}, formItemLayout, { label: "\u8D26\u53F7\u5BC6\u7801", hasFeedback: true }), getFieldDecorator('password', {
                    rules: [{
                            required: true, message: '请设置您的密码!'
                        }, {
                            validator: this.validateToNextPassword
                        }]
                })(react_1.default.createElement(antd_1.Input, { type: "password", placeholder: "8~16\u4F4D\u6570\u5B57\u4E0E\u5927\u5C0F\u5B57\u6BCD\u7EC4\u5408" }))),
                react_1.default.createElement(FormItem, Object.assign({}, formItemLayout, { label: "\u786E\u8BA4\u5BC6\u7801", hasFeedback: true }), getFieldDecorator('confirm', {
                    rules: [{
                            required: true, message: '请确认您的密码!'
                        }, {
                            validator: this.compareToFirstPassword
                        }]
                })(react_1.default.createElement(antd_1.Input, { type: "password", placeholder: "8~16\u4F4D\u6570\u5B57\u4E0E\u5927\u5C0F\u5B57\u6BCD\u7EC4\u5408", onBlur: this.handleConfirmBlur }))),
                react_1.default.createElement(FormItem, Object.assign({}, formItemLayout, { label: "\u9A8C\u8BC1\u7801" }),
                    react_1.default.createElement(antd_1.Row, { gutter: 8 },
                        react_1.default.createElement(antd_1.Col, { span: 12 }, getFieldDecorator('captcha', {
                            rules: [{ required: true, message: '请输入你收到的验证码!' }]
                        })(react_1.default.createElement(antd_1.Input, { placeholder: "\u90AE\u7BB1\u9A8C\u8BC1\u7801" }))),
                        react_1.default.createElement(antd_1.Col, { span: 12 },
                            react_1.default.createElement(antd_1.Button, { className: "gotCaptcha", disabled: !new RegExp(judgement_1.default.email).test(this.state.email) || captchaTime ? true : false, onClick: this.handleCaptcha }, captchaTime
                                ? `等待${captchaTime}秒可重发`
                                : '获取验证码')))),
                react_1.default.createElement(FormItem, Object.assign({}, tailFormItemLayout), getFieldDecorator('agreement', {
                    valuePropName: 'checked'
                })(react_1.default.createElement(antd_1.Checkbox, null,
                    "\u6211\u5DF2\u9605\u8BFB\u5E76\u4E14\u540C\u610F",
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/agreement" }, "\u300A\u6CE8\u518C\u534F\u8BAE\u300B")))),
                react_1.default.createElement(FormItem, Object.assign({}, tailFormItemLayout),
                    react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit", className: "sign-form-button" }, "\u786E\u8BA4\u6CE8\u518C"),
                    react_1.default.createElement(antd_1.Button, { type: "default", htmlType: "submit", className: "sign-form-button" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "\u8FD4\u56DE\u767B\u5F55"))))));
    }
}
// tslint:disable-next-line
let Sign = antd_1.Form.create()(SignComponent);
exports.default = react_redux_1.connect(
// tslint:disable
((e) => e), { fetchSign: action_1.fetchSign, fetchCaptcha: action_1.fetchCaptcha, setCaptchaCountdown: action_1.setCaptchaCountdown }
// tslint:disable-next-line
)(Sign);
