import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer';
import middleware from '../middleware';
var devStore = function () {
    var store = createStore(rootReducer, composeWithDevTools(applyMiddleware.apply(void 0, middleware)));
    return store;
};
export default devStore;
//# sourceMappingURL=store.dev.js.map