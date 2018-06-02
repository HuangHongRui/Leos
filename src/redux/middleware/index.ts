import { createEpicMiddleware } from 'redux-observable';
import history from '../../utils/history';
import { routerMiddleware } from 'react-router-redux';
import rootEpic from '../../epics';

const RouterMiddleware = routerMiddleware(history);
// tslint:disable-next-line
const epicMiddleware = createEpicMiddleware(rootEpic as any);
const middlewares = [
  epicMiddleware,
  RouterMiddleware
];

export default middlewares;
