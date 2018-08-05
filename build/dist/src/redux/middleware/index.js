import { createEpicMiddleware } from 'redux-observable';
import history from '../../utils/history';
import { routerMiddleware } from 'react-router-redux';
import rootEpic from '../../epics';
var RouterMiddleware = routerMiddleware(history);
// tslint:disable-next-line
var epicMiddleware = createEpicMiddleware(rootEpic);
var middlewares = [
    epicMiddleware,
    RouterMiddleware
];
export default middlewares;
//# sourceMappingURL=index.js.map