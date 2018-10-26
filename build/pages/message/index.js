"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const Name_Svg_1 = require("../../component/Svg/Name_Svg");
const Wrap = styled_components_1.default.div `
  height: 100vh;
`;
class UserComponent extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement(Wrap, null,
            react_1.default.createElement(Name_Svg_1.default, null)));
    }
}
exports.default = UserComponent;
