import { createStore, applyMiddleware } from 'redux';
import middleware from '../middleware';
import rootReducer from '../reducer';
var configureStore = function () {
    var store = createStore(rootReducer, applyMiddleware.apply(void 0, middleware));
    return store;
};
export default configureStore;
//# sourceMappingURL=store.prod.js.map