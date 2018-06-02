import { combineReducers } from 'redux';
import test from '../../pages/test/reducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  test,
  router: routerReducer
});
