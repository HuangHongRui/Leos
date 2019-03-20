import * as React from "react";
import { render } from "react-dom";
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './utils/history';
import store from './redux/store';
import Menu from './component/Menu';
import Foot from './component/Foot';
import Home from './pages/home/Home';
import Article from './pages/article';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Write from './pages/write';
import 'src/style/global.scss';

render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <div id="wrap">
          <Menu/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/article" component={Article}/>
          <Route path="/home" component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/write" component={Write}/>
          <Foot/>
        </div>
      </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
