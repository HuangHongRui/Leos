"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  作者: leo
 *  功能: 顶部导航
 *  日期：2018/8/3
 *  文件：index
 *  參數：
 */
const react_1 = require("react");
const react_redux_1 = require("react-redux");
require("./index.scss");
const react_router_dom_1 = require("react-router-dom");
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
class MenuComponent extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            tag: 'home'
        };
        this.handleClick = (e) => {
            this.setState({
                tag: e.key
            });
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps !== prevState) {
            return { tag: nextProps.tag };
        }
    }
    isSelect(path) {
        let result;
        if (this.state.tag === path) {
            result = 'select';
        }
        return result;
    }
    render() {
        return (react_1.default.createElement("div", { className: "menu" },
            react_1.default.createElement("div", { className: "menu_logo" },
                react_1.default.createElement("img", { src: "picture/logo.png", alt: "logo" })),
            react_1.default.createElement("div", { className: "menu_btn" },
                react_1.default.createElement("span", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", className: this.isSelect('home') }, "Home")),
                react_1.default.createElement("span", null,
                    react_1.default.createElement(react_router_dom_1.Link, { to: "article", className: this.isSelect('article') }, "Article")))));
    }
}
const mapStateToProps = (state) => {
    const value = state.router.location.pathname.substr(1)
        ? state.router.location.pathname.substr(1)
        : 'home';
    return {
        tag: value
    };
};
// tslint:disable-next-line
exports.default = react_redux_1.connect(mapStateToProps)(MenuComponent);
