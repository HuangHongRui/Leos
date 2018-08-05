var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Rx = require('rxjs/Rx');
import React from 'react';
import { Form, Input, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchSign, fetchCaptcha, setCaptchaCountdown } from '../../redux/action';
import { connect } from 'react-redux';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .sign-form {\n    max-width: 80vw;\n  }\n  .sign-form-button {\n    width: 100%;\n  }\n  .ant-form-item-label {\n    display: flex;\n    justify-content: start;\n  }\n  .gotCaptcha {\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .sign-form {\n    max-width: 80vw;\n  }\n  .sign-form-button {\n    width: 100%;\n  }\n  .ant-form-item-label {\n    display: flex;\n    justify-content: start;\n  }\n  .gotCaptcha {\n    width: 100%;\n  }\n"])));
// tslint:disable-next-line
var SignComponent = /** @class */ (function (_super) {
    __extends(SignComponent, _super);
    function SignComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
            email: '',
            captchaTime: 0
        };
        _this.handleCaptcha = function () {
            var regexp = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$');
            if (regexp.test(_this.state.email)) {
                _this.props.fetchCaptcha(_this.state.email);
                _this.props.setCaptchaCountdown(60);
                var interval = Rx.Observable
                    .timer(0, 1000)
                    .scan(function (count) { return count - 1; }, 10);
                var sub_1 = interval.subscribe(function (i) {
                    if (i < 0) {
                        sub_1.unsubscribe();
                    }
                    else {
                        _this.props.setCaptchaCountdown(i);
                    }
                });
            }
            else {
                _this.props.form.validateFieldsAndScroll();
            }
        };
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFieldsAndScroll(function (err, values) {
                if (!err) {
                    // tslint:disable-next-line
                    console.log('Received values of form: ', values);
                    _this.props.fetchSign(values);
                }
            });
        };
        // tslint:disable-next-line
        _this.handleConfirmBlur = function (e) {
            var value = e.target.value;
            _this.setState({ confirmDirty: _this.state.confirmDirty || !!value });
        };
        // tslint:disable-next-line
        _this.compareToFirstPassword = function (rule, value, callback) {
            var form = _this.props.form;
            if (value && value !== form.getFieldValue('password')) {
                callback('您输入的密码与上面密码不一致!');
            }
            else {
                callback();
            }
        };
        // tslint:disable-next-line
        _this.validateToNextPassword = function (rule, value, callback) {
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
        _this.handleEmailChange = function (value) {
            var autoCompleteResult;
            if (value.indexOf('@') > -1) {
                autoCompleteResult = [];
            }
            else {
                autoCompleteResult = [
                    '@qq.com', '@gmail.com',
                    '@163.com', '@hotmail.com',
                    '@sina.com', '@126.com'
                ].map(function (domain) { return "" + value + domain; });
            }
            _this.setState({
                autoCompleteResult: autoCompleteResult,
                email: value
            });
        };
        return _this;
    }
    SignComponent.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps !== prevState) {
            return { captchaTime: nextProps.generalData.captchaTime };
        }
    };
    SignComponent.prototype.componentDidMount = function () {
        // tslint:disable
        console.log('☞☞☞ 9527 Sign 44', this);
        console.log('☞☞☞ 9527 Sign 45', this.setState);
    };
    SignComponent.prototype.render = function () {
        var FormItem = Form.Item;
        var AutoCompleteOption = AutoComplete.Option;
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var autoCompleteResult = this.state.autoCompleteResult;
        var captchaTime = this.state.captchaTime;
        var formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 18 }
            }
        };
        var tailFormItemLayout = {
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
        var emailOptions = autoCompleteResult.map(function (email) { return (React.createElement(AutoCompleteOption, { key: email }, email)); });
        return (React.createElement(Wrap, null,
            React.createElement(Form, { onSubmit: this.handleSubmit, className: "sign-form" },
                React.createElement(FormItem, __assign({}, formItemLayout, { label: "\u8D26\u53F7\u90AE\u7BB1", hasFeedback: true }), getFieldDecorator('email', {
                    rules: [{
                            type: 'email', message: '请输入正确 E-mail 格式!'
                        }, {
                            required: true, message: '请输入您的 E-mail!'
                        }]
                })(React.createElement(AutoComplete
                // tslint:disable-next-line
                , { 
                    // tslint:disable-next-line
                    dataSource: emailOptions, onChange: this.handleEmailChange, placeholder: "\u793A\u4F8B: h-hr@qq.com" },
                    React.createElement(Input, null)))),
                React.createElement(FormItem, __assign({}, formItemLayout, { label: "\u8D26\u53F7\u5BC6\u7801", hasFeedback: true }), getFieldDecorator('password', {
                    rules: [{
                            required: true, message: '请设置您的密码!'
                        }, {
                            validator: this.validateToNextPassword
                        }]
                })(React.createElement(Input, { type: "password", placeholder: "8~16\u4F4D\u6570\u5B57\u4E0E\u5927\u5C0F\u5B57\u6BCD\u7EC4\u5408" }))),
                React.createElement(FormItem, __assign({}, formItemLayout, { label: "\u786E\u8BA4\u5BC6\u7801", hasFeedback: true }), getFieldDecorator('confirm', {
                    rules: [{
                            required: true, message: '请确认您的密码!'
                        }, {
                            validator: this.compareToFirstPassword
                        }]
                })(React.createElement(Input, { type: "password", placeholder: "8~16\u4F4D\u6570\u5B57\u4E0E\u5927\u5C0F\u5B57\u6BCD\u7EC4\u5408", onBlur: this.handleConfirmBlur }))),
                React.createElement(FormItem, __assign({}, formItemLayout, { label: "\u9A8C\u8BC1\u7801" }),
                    React.createElement(Row, { gutter: 8 },
                        React.createElement(Col, { span: 12 }, getFieldDecorator('captcha', {
                            rules: [{ required: true, message: '请输入你收到的验证码!' }]
                        })(React.createElement(Input, { placeholder: "\u90AE\u7BB1\u9A8C\u8BC1\u7801" }))),
                        React.createElement(Col, { span: 12 },
                            React.createElement(Button, { className: "gotCaptcha", disabled: captchaTime ? true : false, onClick: this.handleCaptcha }, captchaTime
                                ? "\u7B49\u5F85" + captchaTime + "\u79D2\u53EF\u91CD\u53D1"
                                : '获取验证码')))),
                React.createElement(FormItem, __assign({}, tailFormItemLayout), getFieldDecorator('agreement', {
                    valuePropName: 'checked'
                })(React.createElement(Checkbox, null,
                    "\u6211\u5DF2\u9605\u8BFB\u5E76\u4E14\u540C\u610F",
                    React.createElement(Link, { to: "/agreement" }, "\u300A\u6CE8\u518C\u534F\u8BAE\u300B")))),
                React.createElement(FormItem, __assign({}, tailFormItemLayout),
                    React.createElement(Button, { type: "primary", htmlType: "submit", className: "sign-form-button" }, "\u786E\u8BA4\u6CE8\u518C"),
                    React.createElement(Button, { type: "default", htmlType: "submit", className: "sign-form-button" },
                        React.createElement(Link, { to: "/login" }, "\u8FD4\u56DE\u767B\u5F55"))))));
    };
    return SignComponent;
}(React.Component));
// tslint:disable-next-line
var Sign = Form.create()(SignComponent);
export default connect(
// tslint:disable
(function (e) { return e; }), { fetchSign: fetchSign, fetchCaptcha: fetchCaptcha, setCaptchaCountdown: setCaptchaCountdown }
// tslint:disable-next-line
)(Sign);
var templateObject_1;
//# sourceMappingURL=Sign.js.map