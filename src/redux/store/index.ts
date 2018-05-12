import devStore from './store.dev';
import prodStore from './store.prod';

let store: any;
if (process.env.NODE_ENV === 'production') {
  store = prodStore
} else {
  store = devStore
}

export default store()

// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import test from '../../pages/test/reducer';
//
// const win: any = window;
// const rootReducer = combineReducers({test});
//
// const middlewares: any = [];
//
// const storeEnhancers = compose(
//   applyMiddleware(middlewares)
//   (win && win.devToolsExtension)
//     ? win.devToolsExtension()
//     : (f: any) => f,
// );
//
// export default createStore(rootReducer, storeEnhancers);
