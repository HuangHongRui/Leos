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
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    Info.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            "Info Works!",
            React.createElement("br", null),
            React.createElement("button", { onClick: function () {
                    // tslint:disable-next-line
                    console.log('☞☞☞ 9527 Info 14', _this.props);
                } }, "haha")));
    };
    return Info;
}(React.PureComponent));
// tslint:disable-next-line
function mapStateToProps(state) {
    // tslint:disable-next-line
    console.log(state);
}
// tslint:disable-next-line
var cet = connect(mapStateToProps);
export default cet(Info);
//# sourceMappingURL=Info.js.map