import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import {LocaleProvider} from "antd";
import {Provider} from 'react-redux';
import {ConnectedRouter} from "react-router-redux";
import zhCN from 'antd/lib/locale-provider/zh_CN';

import store from './redux/store';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Test from './pages/test/Redux';
import history from './utils/history';

import './global.scss';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/save" component={Info}/>
          <Route path="/test" component={Test}/>
          <Route path="/gift" component={Home}/>
          <Route path="/team" component={Info}/>
          <Route path="/message" component={Test}/>
          <Route path="/about" component={Test}/>
        </div>
      </ConnectedRouter>
    </LocaleProvider>
  </Provider>
  , document.getElementById('root')
);