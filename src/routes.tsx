import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/** 组件导入 */
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Test from './pages/test/Redux';
// import Test from './pages/test/Rxjs';

/**
 *  路由入口
 */
export default class Routes extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/info" component={Info}/>
          <Route path="/home" component={Home}/>
          <Route path="/test" component={Test}/>
        </div>
      </Router>
    )
  }
}
