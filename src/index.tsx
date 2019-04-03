import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { withRouter } from "react-router";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import store from "./redux/store";
import Menu from "./component/Menu";
import Foot from "./component/Foot";
import Home from "./pages/home/Home";
import Article from "./pages/article";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import Write from "./pages/write";
import Test from "./pages/test";
import "src/style/global.scss";

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>

        <Menu/>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/article" component={Article}/>
          <Route path="/home" component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/write" component={Write}/>

          <Route path="/test" component={Test}/>
        </Switch>
        <Foot/>

      </BrowserRouter>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);