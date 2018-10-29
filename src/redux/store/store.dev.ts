import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';
import middleware from '../middleware';
import logger from 'redux-logger'

const devStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      // applyMiddleware(...middleware)
    )
  );
  return store;
};

export default devStore;