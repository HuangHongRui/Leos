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
/**
 *  作者: leo
 *  功能: 顶部导航
 *  日期：2018/8/3
 *  文件：index
 *  參數：
 */
import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
// import { Link } from 'react-router-dom';
// import { Menu, Icon } from 'antd';
// import styled from 'styled-components';
// const Wrap = styled.div`
//   .menu_ui {
//     padding: 0 2rem;
//     .user{
//       //float: right !important;
//     }
//   }
// `;
var MenuComponent = /** @class */ (function (_super) {
    __extends(MenuComponent, _super);
    function MenuComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tag: 'home'
        };
        _this.handleClick = function (e) {
            _this.setState({
                tag: e.key
            });
        };
        return _this;
    }
    MenuComponent.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps !== prevState) {
            return { tag: nextProps.tag };
        }
    };
    MenuComponent.prototype.render = function () {
        return (React.createElement("div", { className: "menu" },
            React.createElement("div", { className: "menu_logo" },
                React.createElement("img", { src: "picture/logo.png", alt: "logo" })),
            React.createElement("div", { className: "menu_btn" },
                React.createElement("button", { className: "btn-none" }, "Home"),
                React.createElement("button", { className: "btn-none" }, "Music"),
                React.createElement("button", { className: "btn-none" }, "Article"),
                React.createElement("button", { className: "btn-none" }, "Laboratory"))));
    };
    return MenuComponent;
}(React.PureComponent));
var mapStateToProps = function (state) {
    var value = state.router.location.pathname.substr(1)
        ? state.router.location.pathname.substr(1)
        : 'home';
    return {
        tag: value
    };
};
// tslint:disable-next-line
export default connect(mapStateToProps)(MenuComponent);
//# sourceMappingURL=index.js.map