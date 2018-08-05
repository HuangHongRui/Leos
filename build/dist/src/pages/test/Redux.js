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
import { Button } from 'antd';
import { connect } from 'react-redux';
import * as Action from './action';
import Menu from '../../component/Menu';
import styled from 'styled-components';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n"], ["\n\n"])));
/**
 *  Test Page.
 */
// tslint:disable-next-line
var Rxjs = /** @class */ (function (_super) {
    __extends(Rxjs, _super);
    function Rxjs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Rxjs.prototype.render = function () {
        var _this = this;
        return (React.createElement(Wrap, null,
            React.createElement(Menu, null),
            React.createElement(Button, { onClick: function () {
                    // tslint:disable-next-line
                    console.log('☞☞☞ 9527 Redux 27', _this.props);
                } }, "123"),
            React.createElement("br", null),
            React.createElement(Button, { onClick: this.props.add }, "+"),
            React.createElement("span", { onClick: function () {
                    // tslint:disable-next-line
                    console.log('☞☞☞ 9527 Redux 34', _this.props);
                } }, this.props.value),
            React.createElement(Button, { onClick: this.props.delete }, "-")));
    };
    return Rxjs;
}(React.PureComponent));
// tslint:disable-next-line
function mapStateToProps(state, own) {
    // tslint:disable-next-line
    console.log('☞☞☞ 9527 Redux 47', state);
    return {
        value: state.test.hehe
    };
}
// tslint:disable-next-line
function mapDispatchToProps(dispatch, own) {
    return {
        add: function () {
            dispatch(Action.addTodo());
        },
        delete: function () {
            dispatch(Action.deleteTodo());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Rxjs);
var templateObject_1;
//# sourceMappingURL=Redux.js.map