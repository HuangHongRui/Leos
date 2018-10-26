"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./Home.scss");
const Bird_Svg_1 = require("../../component/Svg/Bird_Svg");
// import Menu from '../../component/Menu';
// import Foot from '../../component/Foot';
// import styled from 'styled-components';
// import ListComponent from '../../component/List';
// import { Card } from 'antd';
// import NameSvg from '../../component/Svg/Name_Svg';
// tslint:disable-next-line
class Home extends react_1.default.PureComponent {
    render() {
        return (react_1.default.createElement("div", { className: "home content" },
            react_1.default.createElement(Bird_Svg_1.default, null)));
    }
}
exports.default = Home;
