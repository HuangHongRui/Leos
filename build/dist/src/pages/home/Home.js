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
// import Menu from '../../component/Menu';
// import Foot from '../../component/Foot';
import './Home.scss';
// import styled from 'styled-components';
// import ListComponent from '../../component/List';
// import { Card } from 'antd';
// import NameSvg from '../../component/Svg/Name_Svg';
// const Wrap = styled.div`
//   .card {
//     border: none;
//     margin-bottom: 1vh;
//     .ant-card-body {
//       padding: 0 !important;
//     }
//     .cover_pic {
//       min-height: 59vw;
//     }
//     .avatar {
//       position: absolute;
//       top: 10%;
//       display: grid;
//       justify-content: center;
//       img {
//         width: 20vw;
//         min-height: 20vw;
//         border-radius: 50%;
//         border: solid 1vw rgba(0,0,0,.3);
//         justify-self: center;
//         :hover {
//           border-color: rgba(0,0,0,.5);
//           cursor: pointer;
//         }
//       }
//       span.name {
//         background: linear-gradient(90deg,#3183f9,#dc3023,#057748,#f35336);
//         -webkit-background-clip: text;
//         color: transparent;
//         font-size: 8vw;
//         font-weight: 800;
//         font-family: HanWangT0007f2331b96e1b622;
//         text-align: center;
//         position: relative;
//         overflow: hidden;
//       }
//       span.description {
//         font-size: 5vw;
//         letter-spacing: .5vw;
//         background: linear-gradient(90deg,#dc3023,#3183f9,#057748,#f35336);
//         -webkit-background-clip: text;
//         color: transparent;
//         font-weight: 800;
//       }
//     }
//   }
// `;
// tslint:disable-next-line
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", { className: "home" }));
    };
    return Home;
}(React.PureComponent));
export default Home;
//# sourceMappingURL=Home.js.map