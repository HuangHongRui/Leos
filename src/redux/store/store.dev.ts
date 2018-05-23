import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';
import middleware from '../middleware';

const devStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  // if (process.env.NODE_ENV !== 'production') {
  //   if (module.hot) {
  //     module.hot.accept('../reducer', () => {
  //       store.replaceReducer(rootReducer);
  //     });
  //   }
  // }

  return store;
};

export default devStore;
