"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./index.scss");
class Bird extends react_1.default.Component {
    render() {
        return (react_1.default.createElement("div", { id: "sky" },
            react_1.default.createElement("div", { className: "bird" },
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "wind" }),
                react_1.default.createElement("div", { className: "bird_body" },
                    react_1.default.createElement("div", { className: "bird_head" }),
                    react_1.default.createElement("div", { className: "bird_wing_left" },
                        react_1.default.createElement("div", { className: "bird_wing_left_top" })),
                    react_1.default.createElement("div", { className: "bird_wing_right" },
                        react_1.default.createElement("div", { className: "bird_wing_right_top" })),
                    react_1.default.createElement("div", { className: "bird_tail_left" }),
                    react_1.default.createElement("div", { className: "bird_tail_right" })))));
    }
}
exports.default = Bird;
