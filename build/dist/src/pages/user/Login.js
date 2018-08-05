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
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .login-form {\n    max-width: 80vw;\n  }\n  .login-form-forgot {\n    float: right;\n  }\n  .login-form-button {\n    width: 100%;\n  }\n .ant-form-item-label {\n  display: flex;\n  justify-content: start;\n }\n  "], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .login-form {\n    max-width: 80vw;\n  }\n  .login-form-forgot {\n    float: right;\n  }\n  .login-form-button {\n    width: 100%;\n  }\n .ant-form-item-label {\n  display: flex;\n  justify-content: start;\n }\n  "])));
// tslint:disable-next-line
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    // tslint:disable-next-line
                    console.log('Received values of form: ', values);
                }
            });
        };
        // tslint:disable-next-line
        _this.handleConfirmPassword = function (rule, value, callback) {
        };
        return _this;
    }
    Login.prototype.render = function () {
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
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return (React.createElement(Wrap, null,
            React.createElement(Form, { onSubmit: this.handleSubmit, className: "login-form" },
                React.createElement(Form.Item, __assign({}, formItemLayout, { hasFeedback: true, validateStatus: "success", label: "\u8D26\u53F7\u90AE\u7BB1", required: true }), getFieldDecorator('email', {
                    rules: [{
                            pattern: /^\d+$/
                        }, {
                            validator: this.handleConfirmPassword
                        }]
                })(React.createElement(Input, { placeholder: "\u793A\u4F8B: h-hr@qq.com" }))),
                React.createElement(Form.Item, __assign({}, formItemLayout, { hasFeedback: true, validateStatus: "success", label: "\u8D26\u53F7\u5BC6\u7801", required: true }), getFieldDecorator('password')(React.createElement(Input, { type: "password", placeholder: "8~16\u4F4D\u5927\u5C0F\u5B57\u6BCD\u4E0E\u6570\u5B57\u7EC4\u5408" }))),
                React.createElement(Form.Item, null,
                    getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(React.createElement(Checkbox, null, "\u8BB0\u4F4F\u6211\u7684\u767B\u5F55\u72B6\u6001")),
                    React.createElement(Link, { className: "login-form-forgot", to: "/forgetPwd" }, "\u5BC6\u7801\u5FD8\u8BB0\u4E86!"),
                    React.createElement(Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "\u786E\u5B9A\u767B\u5F55"),
                    React.createElement(Button, { type: "default", htmlType: "submit", className: "login-form-button" },
                        React.createElement(Link, { to: "/sign" }, "\u6CE8\u518C\u8D26\u53F7"))))));
    };
    return Login;
}(React.Component));
export default Form.create()(Login);
var templateObject_1;
//# sourceMappingURL=Login.js.map