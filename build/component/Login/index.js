"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
const styled_components_1 = require("styled-components");
// @ts-ignore
const Wrap = styled_components_1.default(antd_1.Form) `
  width: 50vw;
`;
const FormItem = antd_1.Form.Item;
// tslint:disable-next-line
class NormalLoginForm extends react_1.default.Component {
    constructor() {
        super(...arguments);
        // tslint:disable-next-line
        this.handleSubmit = (e) => {
            e.preventDefault();
            // tslint:disable-next-line
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    // tslint:disable-next-line
                    console.log('Received values of form: ', values);
                }
            });
        };
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (react_1.default.createElement(Wrap, { onSubmit: this.handleSubmit, className: "login-form" },
            react_1.default.createElement(FormItem, null, getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }]
            })(react_1.default.createElement(antd_1.Input, { prefix: react_1.default.createElement(antd_1.Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "Username" }))),
            react_1.default.createElement(FormItem, null, getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
            })(react_1.default.createElement(antd_1.Input, { prefix: react_1.default.createElement(antd_1.Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
            react_1.default.createElement(FormItem, null,
                getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                })(react_1.default.createElement(antd_1.Checkbox, null, "Remember me")),
                react_1.default.createElement("a", { className: "login-form-forgot", href: "" }, "Forgot password"),
                react_1.default.createElement(antd_1.Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "Log in"),
                "Or ",
                react_1.default.createElement("a", { href: "" }, "register now!"))));
    }
}
const WrappedNormalLoginForm = antd_1.Form.create()(NormalLoginForm);
exports.default = WrappedNormalLoginForm;
