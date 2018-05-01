import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './home/Home';
import Info from './info/Info';

const Main = (
  <Router>
    <div>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/info" component={Info}/>
      <Route path="/home" component={Home}/>
    </div>
  </Router>
);

ReactDOM.render(
  Main,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
