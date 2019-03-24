import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

const history = createBrowserHistory();
const RouterMiddleware = routerMiddleware(history);
const middlewaresa = [
  thunk,
  RouterMiddleware,
];

export default middlewaresa;