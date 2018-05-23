// import thunk from 'redux-thunk';
import history from '../../utils/history';
import { routerMiddleware } from 'react-router-redux';
const RouterMiddleware = routerMiddleware(history);

const middlewares = [
  // thunk,
  RouterMiddleware,
];

export default middlewares;
