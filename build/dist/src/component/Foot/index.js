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
import React, { Component } from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchOnline } from '../../redux/action';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2vh;\n  background-color: rgba(0,0,0,.8);\n  color: hsla(0,0%,100%,.5);\n  p {\n    margin: 0;\n  }\n  .source {\n    i { \n      color: #f73f51;\n      font-size: 22px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2vh;\n  background-color: rgba(0,0,0,.8);\n  color: hsla(0,0%,100%,.5);\n  p {\n    margin: 0;\n  }\n  .source {\n    i { \n      color: #f73f51;\n      font-size: 22px;\n    }\n  }\n"])));
// tslint:disable-next-line
var FootComponent = /** @class */ (function (_super) {
    __extends(FootComponent, _super);
    function FootComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            online: '0'
        };
        return _this;
    }
    FootComponent.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps !== prevState) {
            return { online: nextProps.generalData.online };
        }
    };
    FootComponent.prototype.componentDidMount = function () {
        this.props.fetchOnline();
    };
    FootComponent.prototype.render = function () {
        return (React.createElement(Wrap, null,
            React.createElement("p", null,
                React.createElement("a", { href: "https://www.aliyun.com/" },
                    " ",
                    React.createElement(Icon, { type: "aliyun" }),
                    " "),
                React.createElement("a", { href: "https://github.com/HuangHongRui" },
                    " ",
                    React.createElement(Icon, { type: "github" }),
                    " ")),
            React.createElement("p", null,
                "\u5F53\u524D\u5728\u7EBF\u4EBA\u6570: ",
                this.state.online),
            React.createElement("p", null,
                "\u535A\u5BA2\u5DF2\u8FD0\u884C",
                React.createElement("span", null, "xxx\u5929xx\u5C0F\u65F6xx\u5206xx\u79D2"),
                React.createElement("span", { className: "am-my-face" }, "(\u25CF'\u25E1'\u25CF)\uFF89\u2665")),
            React.createElement("p", { className: "source" },
                "Made with ",
                React.createElement("i", null, "\u2764"),
                " by Rui")));
    };
    return FootComponent;
}(Component));
export default connect(
// tslint:disable
function (_a) {
    var generalData = _a.generalData;
    return ({ generalData: generalData });
}, { fetchOnline: fetchOnline })(FootComponent);
var templateObject_1;
//# sourceMappingURL=index.js.map