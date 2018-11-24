"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("./index.scss");
class Bird extends React.Component {
    render() {
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
    }
}
exports.default = Bird;
