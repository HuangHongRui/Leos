import { combineEpics } from 'redux-observable';
import fetchSign from './fetchSign';
import fetchOnline from './fetchOnline';

export default combineEpics(
  fetchSign,
  fetchOnline
);