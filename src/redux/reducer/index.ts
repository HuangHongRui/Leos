import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import test from '../../pages/test/reducer';
import generalData from './generalData';

export default combineReducers({
  test,
  generalData,
  router: routerReducer
});
