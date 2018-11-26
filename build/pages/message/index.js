"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Name_Svg_1 = require("../../component/Svg/Name_Svg");
const Wrap = styled_components_1.default.div `
  height: 100vh;
`;
class UserComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (React.createElement(Wrap, null,
            React.createElement(Name_Svg_1.default, null)));
    }
}
exports.default = UserComponent;
