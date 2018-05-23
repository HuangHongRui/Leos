import { createStore, applyMiddleware } from 'redux';
import middleware from '../middleware';
import rootReducer from '../reducer';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
  );

  return store;
};

export default configureStore;
