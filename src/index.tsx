import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider } from "antd";
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './pages/reducers'

import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routes from "./routes";
import './global.scss';

const store = createStore(reducer);
const Main = (
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <Routes/>
    </LocaleProvider>
  </Provider>
);

ReactDOM.render(
  Main,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
