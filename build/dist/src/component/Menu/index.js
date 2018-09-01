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
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .menu_ui {\n    padding: 0 2rem;\n    .user{\n      //float: right !important;\n    }\n  }\n"], ["\n  .menu_ui {\n    padding: 0 2rem;\n    .user{\n      //float: right !important;\n    }\n  }\n"])));
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
        return (React.createElement(Wrap, null,
            React.createElement(Menu, { onClick: this.handleClick, selectedKeys: [this.state.tag], mode: "horizontal", className: "menu_ui" },
                React.createElement(Menu.Item, { key: "home" },
                    React.createElement(Link, { to: "/" },
                        React.createElement(Icon, { type: "home" }),
                        "\u4E3B\u9875")),
                React.createElement(Menu.Item, { key: "save" },
                    React.createElement(Link, { to: "/save" },
                        React.createElement(Icon, { type: "hdd" }),
                        "\u5F52\u6863")),
                React.createElement(Menu.Item, { key: "test" },
                    React.createElement(Link, { to: "/test" },
                        React.createElement(Icon, { type: "setting" }),
                        "\u5B9E\u9A8C\u5BA4")),
                React.createElement(Menu.Item, { key: "gift" },
                    React.createElement(Link, { to: "/gift" },
                        React.createElement(Icon, { type: "gift" }),
                        "\u6295\u5582")),
                React.createElement(Menu.Item, { key: "team" },
                    React.createElement(Link, { to: "/team" },
                        React.createElement(Icon, { type: "team" }),
                        "\u540E\u5BAB")),
                React.createElement(Menu.Item, { key: "message" },
                    React.createElement(Link, { to: "/message" },
                        React.createElement(Icon, { type: "message" }),
                        "\u7559\u8A00\u677F")),
                React.createElement(Menu.Item, { key: "about" },
                    React.createElement(Link, { to: "/about" },
                        React.createElement(Icon, { type: "notification" }),
                        "\u5173\u4E8E")),
                React.createElement(Menu.SubMenu, { key: "user", className: "user", title: React.createElement("span", null,
                        React.createElement(Icon, { type: "user" }),
                        "\u7528\u6237") },
                    React.createElement(Menu.ItemGroup, null,
                        React.createElement(Menu.Item, { key: "setting:1" },
                            React.createElement(Link, { to: "/login" }, "\u767B\u5F55")),
                        React.createElement(Menu.Item, { key: "setting:2" },
                            React.createElement(Link, { to: "/sign" }, "\u6CE8\u518C")))))));
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
var templateObject_1;
//# sourceMappingURL=index.js.map