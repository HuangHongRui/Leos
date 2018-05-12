import React from 'react';
import ReactDOM from 'react-dom';
import {LocaleProvider} from "antd";
import {Provider} from 'react-redux';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import Routes from "./routes";
import store from './redux/store';
import './global.scss';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <Routes/>
    </LocaleProvider>
  </Provider>
  , document.getElementById('root')
);

// if (module.hot) {
//   module.hot.accept('./pages/home/Home', () => {
//     ReactDOM.render(
//       <Provider store={store}>
//         <ConnectedRouter history={history}>
//           <Routes/>
//         </ConnectedRouter>
//       </Provider>,
//       document.getElementById('root'),
//     );
//   });
// }
