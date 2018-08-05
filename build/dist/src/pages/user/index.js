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
import { connect } from 'react-redux';
import Styled from 'styled-components';
import Login from './Login';
import Sign from './Sign';
import Menu from '../../component/Menu';
import FootComponent from '../../component/Foot';
var Wrap = Styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  height: 100vh;\n  grid-template-rows: auto 1fr auto;\n"], ["\n  display: grid;\n  height: 100vh;\n  grid-template-rows: auto 1fr auto;\n"])));
var UserComponent = /** @class */ (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            pathname: ''
        };
        /**
         *  @parms: string
         *  return: React.ReactNode | null
         */
        _this.judgeRender = function (parms) {
            if (parms === 'login') {
                return React.createElement(Login, null);
            }
            else if (parms === 'sign') {
                return React.createElement(Sign, null);
            }
        };
        return _this;
    }
    UserComponent.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps !== prevState) {
            return { pathname: nextProps.pathname };
        }
    };
    UserComponent.prototype.render = function () {
        var pn = this.state.pathname;
        return (React.createElement(Wrap, null,
            React.createElement(Menu, null),
            this.judgeRender(pn) || null,
            React.createElement(FootComponent, null)));
    };
    return UserComponent;
}(React.Component));
var mapStateToProps = function (state) {
    var value = state.router.location.pathname.substr(1);
    if (value) {
        return { pathname: value };
    }
};
// tslint:disable-next-line
export default connect(mapStateToProps)(UserComponent);
var templateObject_1;
//# sourceMappingURL=index.js.map