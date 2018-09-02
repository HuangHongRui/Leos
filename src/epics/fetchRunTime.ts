import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/merge';
import * as ActionTypes from '../redux/actionType';
import { setRunTime } from '../redux/action';

export default function fetchRunTime(action$: { ofType: Function }) {
  return action$.ofType(ActionTypes.API_RUNTIME)
    .mergeMap((action: { payload: string }) => Observable.merge(
      ajax.getJSON(action.payload)
        .map((res: {}) => res)
        .map(setRunTime)
    ));
}