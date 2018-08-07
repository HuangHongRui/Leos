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
import { connect } from 'react-redux';
import { fetchOnline } from '../../redux/action';
import './index.scss';
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
        return (React.createElement("div", { className: "foot" },
            React.createElement("p", { className: "foot-inline-num" },
                "\u5F53\u524D\u5728\u7EBF\u4EBA\u6570: ",
                this.state.online),
            React.createElement("p", { className: "foot-go-data" },
                "\u535A\u5BA2\u5DF2\u8FD0\u884C",
                React.createElement("span", null, "1329\u592918\u5C0F\u65F629\u520606\u79D2"),
                React.createElement("span", { className: "am-my-face" }, "(\u25CF'\u25E1'\u25CF)\uFF89\u2665")),
            React.createElement("p", { className: "foot-source" },
                "Made with ",
                React.createElement("i", null, "\u2764"),
                " by Leo")));
    };
    return FootComponent;
}(Component));
export default connect(
// tslint:disable
function (_a) {
    var generalData = _a.generalData;
    return ({ generalData: generalData });
}, { fetchOnline: fetchOnline })(FootComponent);
//# sourceMappingURL=index.js.map