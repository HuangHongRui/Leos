"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_router_redux_1 = require("react-router-redux");
const history_1 = require("./utils/history");
const store_1 = require("./redux/store");
const Menu_1 = require("./component/Menu");
const Foot_1 = require("./component/Foot");
const Home_1 = require("./pages/home/Home");
const article_1 = require("./pages/article");
require("src/style/global.scss");
// import Info from './pages/info/Info';
// import Test from './pages/test/Redux';
// import User from './pages/user/User';
// import Name from './pages/message';
// import Rx from './pages/test/Rxjs';
// import Drag from './pages/test/Drag';
// import Login from './pages/user';
// import Sign from './pages/user';
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_redux_1.ConnectedRouter, { history: history_1.default },
        React.createElement("div", { id: "wrap" },
            React.createElement(Menu_1.default, null),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/article", component: article_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/home", component: Home_1.default }),
            React.createElement(Foot_1.default, null)))), document.getElementById("root"));
