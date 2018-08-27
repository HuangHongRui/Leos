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
import './index.scss';
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bird.prototype.render = function () {
        return (React.createElement("div", { id: "sky" },
            React.createElement("div", { className: "bird" },
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "wind" }),
                React.createElement("div", { className: "bird_body" },
                    React.createElement("div", { className: "bird_head" }),
                    React.createElement("div", { className: "bird_wing_left" },
                        React.createElement("div", { className: "bird_wing_left_top" })),
                    React.createElement("div", { className: "bird_wing_right" },
                        React.createElement("div", { className: "bird_wing_right_top" })),
                    React.createElement("div", { className: "bird_tail_left" }),
                    React.createElement("div", { className: "bird_tail_right" })))));
    };
    return Bird;
}(React.Component));
export default Bird;
//# sourceMappingURL=index.js.map