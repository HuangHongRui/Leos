import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import generalData from "./generalData";

const history = createBrowserHistory();

export default combineReducers({
  generalData,
  router: connectRouter(history)
});
