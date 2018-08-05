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
import NameComponent from '../../component/Svg/Name_Svg';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100vh;\n"], ["\n  height: 100vh;\n"])));
var UserComponent = /** @class */ (function (_super) {
    __extends(UserComponent, _super);
    function UserComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    UserComponent.prototype.render = function () {
        return (React.createElement(Wrap, null,
            React.createElement(NameComponent, null)));
    };
    return UserComponent;
}(React.Component));
export default UserComponent;
var templateObject_1;
//# sourceMappingURL=index.js.map