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
import { Card } from 'antd';
import Menu from '../../component/Menu';
import ListComponent from '../../component/List';
import FootComponent from '../../component/Foot';
import './Home.scss';
import NameSvg from '../../component/Svg/Name_Svg';
var Wrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .card {\n    border: none;\n    margin-bottom: 1vh;\n    .ant-card-body {\n      padding: 0 !important;\n    }\n    .cover_pic {\n      min-height: 59vw;\n    }\n    .avatar {\n      position: absolute;\n      top: 10%;\n      display: grid;\n      justify-content: center;\n      img {\n        width: 20vw;\n        min-height: 20vw;\n        border-radius: 50%;\n        border: solid 1vw rgba(0,0,0,.3);\n        justify-self: center;\n        :hover {\n          border-color: rgba(0,0,0,.5);\n          cursor: pointer;\n        }\n      }\n      span.name {\n        background: linear-gradient(90deg,#3183f9,#dc3023,#057748,#f35336);\n        -webkit-background-clip: text;\n        color: transparent;\n        font-size: 8vw;\n        font-weight: 800;\n        font-family: HanWangT0007f2331b96e1b622;\n        text-align: center;\n        position: relative;\n        overflow: hidden;\n      }\n      span.description {\n        font-size: 5vw;\n        letter-spacing: .5vw;\n        background: linear-gradient(90deg,#dc3023,#3183f9,#057748,#f35336);\n        -webkit-background-clip: text;\n        color: transparent;\n        font-weight: 800;\n      }\n    }\n  }\n"], ["\n  .card {\n    border: none;\n    margin-bottom: 1vh;\n    .ant-card-body {\n      padding: 0 !important;\n    }\n    .cover_pic {\n      min-height: 59vw;\n    }\n    .avatar {\n      position: absolute;\n      top: 10%;\n      display: grid;\n      justify-content: center;\n      img {\n        width: 20vw;\n        min-height: 20vw;\n        border-radius: 50%;\n        border: solid 1vw rgba(0,0,0,.3);\n        justify-self: center;\n        :hover {\n          border-color: rgba(0,0,0,.5);\n          cursor: pointer;\n        }\n      }\n      span.name {\n        background: linear-gradient(90deg,#3183f9,#dc3023,#057748,#f35336);\n        -webkit-background-clip: text;\n        color: transparent;\n        font-size: 8vw;\n        font-weight: 800;\n        font-family: HanWangT0007f2331b96e1b622;\n        text-align: center;\n        position: relative;\n        overflow: hidden;\n      }\n      span.description {\n        font-size: 5vw;\n        letter-spacing: .5vw;\n        background: linear-gradient(90deg,#dc3023,#3183f9,#057748,#f35336);\n        -webkit-background-clip: text;\n        color: transparent;\n        font-weight: 800;\n      }\n    }\n  }\n"])));
// tslint:disable-next-line
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement(Wrap, null,
            React.createElement(Card, { className: "card", cover: React.createElement("div", { className: "ant-card-cover" },
                    React.createElement("img", { className: "cover_pic", alt: "Cover", src: "picture/001.jpeg" }),
                    React.createElement("div", { className: "avatar" },
                        React.createElement("img", { src: "picture/000.jpeg" }),
                        React.createElement(NameSvg, null),
                        React.createElement("span", { className: "description" }, "Follow Your Heart.."))) },
                React.createElement(Menu, null)),
            React.createElement(ListComponent, null),
            React.createElement(FootComponent, null)));
    };
    return Home;
}(React.PureComponent));
export default Home;
var templateObject_1;
//# sourceMappingURL=Home.js.map