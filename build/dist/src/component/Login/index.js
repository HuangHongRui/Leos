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
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
var Wrap = styled(Form)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50vw;\n"], ["\n  width: 50vw;\n"])));
var FormItem = Form.Item;
// tslint:disable-next-line
var NormalLoginForm = /** @class */ (function (_super) {
    __extends(NormalLoginForm, _super);
    function NormalLoginForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // tslint:disable-next-line
        _this.handleSubmit = function (e) {
            e.preventDefault();
            // tslint:disable-next-line
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    // tslint:disable-next-line
                    console.log('Received values of form: ', values);
                }
            });
        };
        return _this;
    }
    NormalLoginForm.prototype.render = function () {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return (React.createElement(Wrap, { onSubmit: this.handleSubmit, className: "login-form" },
            React.createElement(FormItem, null, getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }]
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "user", style: { color: 'rgba(0,0,0,.25)' } }), placeholder: "Username" }))),
            React.createElement(FormItem, null, getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }]
            })(React.createElement(Input, { prefix: React.createElement(Icon, { type: "lock", style: { color: 'rgba(0,0,0,.25)' } }), type: "password", placeholder: "Password" }))),
            React.createElement(FormItem, null,
                getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                })(React.createElement(Checkbox, null, "Remember me")),
                React.createElement("a", { className: "login-form-forgot", href: "" }, "Forgot password"),
                React.createElement(Button, { type: "primary", htmlType: "submit", className: "login-form-button" }, "Log in"),
                "Or ",
                React.createElement("a", { href: "" }, "register now!"))));
    };
    return NormalLoginForm;
}(React.Component));
var WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;
var templateObject_1;
//# sourceMappingURL=index.js.map