import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import history from './utils/history';
import store from './redux/store';
import 'src/style/global.scss';
import Menu from './component/Menu';
import Foot from './component/Foot';
import Home from './pages/home/Home';
import Article from './pages/article';
// import Info from './pages/info/Info';
// import Test from './pages/test/Redux';
// import User from './pages/user/User';
// import Name from './pages/message';
// import Rx from './pages/test/Rxjs';
// import Drag from './pages/test/Drag';
// import Login from './pages/user';
// import Sign from './pages/user';
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(LocaleProvider, { locale: zhCN },
        React.createElement(ConnectedRouter, { history: history },
            React.createElement("div", { id: "wrap" },
                React.createElement(Menu, null),
                React.createElement(Route, { exact: true, path: "/", component: Home }),
                React.createElement(Route, { path: "/article", component: Article }),
                React.createElement(Foot, null))))), document.getElementById('root'));
//# sourceMappingURL=index.js.map