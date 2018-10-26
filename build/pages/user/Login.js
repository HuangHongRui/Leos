"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const styled_components_1 = require("styled-components");
const react_router_dom_1 = require("react-router-dom");
const Wrap = styled_components_1.default.div `
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
// tslint:disable-next-line
class Login extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    // tslint:disable-next-line
                    console.log('Received values of form: ', values);
                }
            });
        };
        // tslint:disable-next-line
        this.handleConfirmPassword = (rule, value, callback) => {
        };
    }
    render() {
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
        const { getFieldDecorator } = this.props.form;
        return (react_1.default.createElement(Wrap, null,
            react_1.default.createElement(antd_1.Form, { onSubmit: this.handleSubmit, className: "login-form" },
                react_1.default.createElement(antd_1.Form.Item, Object.assign({}, formItemLayout, { hasFeedback: true, validateStatus: "success", label: "\u8D26\u53F7\u90AE\u7BB1", required: true }), getFieldDecorator('email', {
                    rules: [{
                            pattern: /^\d+$/
                        }, {
                            validator: this.handleConfirmPassword
                        }]
                })(react_1.default.createElement(antd_1.Input, { placeholder: "\u793A\u4F8B: h-hr@qq.com" }))),
                react_1.default.createElement(antd_1.Form.Item, Object.assign({}, formItemLayout, { hasFeedback: true, validateStatus: "success", label: "\u8D26\u53F7\u5BC6\u7801", required: true }), getFieldDecorator('password')(react_1.default.createElement(antd_1.Input, { type: "password", placeholder: "8~16\u4F4D\u5927\u5C0F\u5B57\u6BCD\u4E0E\u6570\u5B57\u7EC4\u5408" }))),
                react_1.default.createElement(antd_1.Form.Item, null,
                    getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true
                    })(react_1.default.createElement(antd_1.Checkbox, null, "\u8BB0\u4F4F\u6211\u7684\u767B\u5F55\u72B6\u6001")),
                    react_1.default.createElement(react_router_dom_1.Link, { className: "login-form-forgot", to: "/forgetPwd" }, "\u5BC6\u7801\u5FD8\u8BB0\u4E86!"),
                    react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "\u786E\u5B9A\u767B\u5F55"),
                    react_1.default.createElement(antd_1.Button, { type: "default", htmlType: "submit", className: "login-form-button" },
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/sign" }, "\u6CE8\u518C\u8D26\u53F7"))))));
    }
}
exports.default = antd_1.Form.create()(Login);
