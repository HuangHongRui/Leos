"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const Login_1 = require("../../component/Login");
const Wrap = styled_components_1.default.div `
  height: 100vh;
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
`;
class UserComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement(Wrap, null,
            react_1.default.createElement(Login_1.default, null)));
    }
}
exports.default = UserComponent;
