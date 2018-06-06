import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/merge';
import * as ActionTypes from '../redux/actionType';

export default function fetchCaptcha(action$: { ofType: Function }) {
  return action$.ofType(ActionTypes.API_CAPTCHA)
    .mergeMap((action: ActionTypes) => Observable.merge(
      ajax.getJSON(action.payload.api)
        .map((res: {}) => res)
    ));
}

interface ActionTypes {
  payload: {
    api: string;
    email: string;
  };
}
