import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import generalData from './generalData';

export default combineReducers({
  generalData,
  router: routerReducer
});
