import history from "src/utils/history";
import { routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk'

const RouterMiddleware = routerMiddleware(history);
const middlewaresa = [
  thunk,
  RouterMiddleware,
];

export default middlewaresa;