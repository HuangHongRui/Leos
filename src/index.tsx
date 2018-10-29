import * as React from "react";
import { render } from "react-dom";
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './utils/history';
import store from './redux/store';
// import 'src/style/global.scss';
//
import Menu from './component/Menu';
import Foot from './component/Foot';
import Home from './pages/home/Home';
import Article from './pages/article';
import './style/global.scss';

// import Info from './pages/info/Info';
// import Test from './pages/test/Redux';
// import User from './pages/user/User';
// import Name from './pages/message';
// import Rx from './pages/test/Rxjs';
// import Drag from './pages/test/Drag';
// import Login from './pages/user';
// import Sign from './pages/user';

render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <div id="wrap">
          <Menu/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/article" component={Article}/>
          <Route path="/home" component={Home}/>
          {/*<Route path="/save" component={Info}/>*/}
          {/*<Route path="/test" component={Drag}/>*/}
          {/*<Route path="/gift" component={Rx}/>*/}
          {/*<Route path="/team" component={Info}/>*/}
          {/*<Route path="/message" component={Name}/>*/}
          {/*<Route path="/about" component={Test}/>*/}
          {/*<Route path="/user" component={User}/>*/}
          {/*<Route path="/login" component={Login}/>*/}
          {/*<Route path="/sign" component={Sign}/>*/}
          <Foot/>
        </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
