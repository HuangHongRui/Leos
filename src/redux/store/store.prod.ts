import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducer";
import middleware from "../middleware";

const prodStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middleware)
    )
  );
  return store;
};

export default prodStore;