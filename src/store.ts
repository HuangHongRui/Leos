import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import test from './pages/test/reducer';

/**
 *  合并 Reducer
 */
const win: any = window;
// const reduxDevtools = win && win.devToolsExtension ? win.devToolsExtension() : (f: any) => f;
const rootReducer = combineReducers({test});

const middlewares: any = [];

const storeEnhancers = compose(
  applyMiddleware(middlewares)
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f: any) => f,
);

export default createStore(rootReducer, storeEnhancers);
