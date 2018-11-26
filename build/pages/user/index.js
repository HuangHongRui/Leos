"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const styled_components_1 = require("styled-components");
const Login_1 = require("./Login");
const Sign_1 = require("./Sign");
const Menu_1 = require("../../component/Menu");
const Foot_1 = require("../../component/Foot");
const Wrap = styled_components_1.default.div `
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`;
class UserComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            pathname: ''
        };
        /**
         *  @parms: string
         *  return: React.ReactNode | null
         */
        this.judgeRender = (parms) => {
            if (parms === 'login') {
                return React.createElement(Login_1.default, null);
            }
            else if (parms === 'sign') {
                return React.createElement(Sign_1.default, null);
            }
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return { pathname: nextProps.pathname };
        }
    }
    render() {
        const pn = this.state.pathname;
        return (React.createElement(Wrap, null,
            React.createElement(Menu_1.default, null),
            this.judgeRender(pn) || null,
            React.createElement(Foot_1.default, null)));
    }
}
const mapStateToProps = (state) => {
    const value = state.router.location.pathname.substr(1);
    if (value) {
        return { pathname: value };
    }
};
// tslint:disable-next-line
exports.default = react_redux_1.connect(mapStateToProps)(UserComponent);
