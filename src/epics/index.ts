import { combineEpics } from 'redux-observable';
import fetchSign from './fetchSign';

export default combineEpics(
  fetchSign
);