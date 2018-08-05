import { combineEpics } from 'redux-observable';
import fetchSign from './fetchSign';
import fetchOnline from './fetchOnline';
import fetchCaptcha from './fetchCaptcha';
export default combineEpics(fetchSign, fetchOnline, fetchCaptcha);
//# sourceMappingURL=index.js.map