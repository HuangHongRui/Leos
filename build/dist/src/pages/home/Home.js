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
import './Home.scss';
import BirdSvg from '../../component/Svg/Bird_Svg';
// import Menu from '../../component/Menu';
// import Foot from '../../component/Foot';
// import styled from 'styled-components';
// import ListComponent from '../../component/List';
// import { Card } from 'antd';
// import NameSvg from '../../component/Svg/Name_Svg';
// tslint:disable-next-line
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "home" },
            React.createElement(BirdSvg, null)));
    };
    return Home;
}(React.PureComponent));
export default Home;
//# sourceMappingURL=Home.js.map