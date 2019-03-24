import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";
import middleware from "../middleware";

const devStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      composeWithDevTools(
        applyMiddleware(...middleware)
      )
    )
  );
  return store;
};

export default devStore;