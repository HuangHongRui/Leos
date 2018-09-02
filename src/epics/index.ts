import { combineEpics } from 'redux-observable';
import fetchSign from './fetchSign';
import fetchOnline from './fetchOnline';
import fetchCaptcha from './fetchCaptcha';
import fetchRunTime from './fetchRunTime';

export default combineEpics(
  fetchSign,
  fetchOnline,
  fetchCaptcha,
  fetchRunTime,
);