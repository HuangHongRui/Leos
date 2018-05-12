import React from 'react';
import {Route} from 'react-router-dom';

/** 组件导入 */
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Test from './pages/test/Redux';
import {ConnectedRouter} from "react-router-redux";
import history from './utils/history';
// import Test from './pages/test/Rxjs';

/**
 *  路由入口
 */
export default class Routes extends React.Component {

  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/home" component={Home}/>
          <Route path="/test" component={Test}/>
        </div>
      </ConnectedRouter>
    )
  }
}
