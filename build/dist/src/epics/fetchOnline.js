import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/merge';
import * as ActionTypes from '../redux/actionType';
import { setOnline } from '../redux/action';
export default function fetchOnline(action$) {
    return action$.ofType(ActionTypes.API_ONLINE)
        .mergeMap(function (action) { return Observable.merge(ajax.getJSON(action.payload)
        .map(function (res) { return res; })
        .map(setOnline)); });
}
//# sourceMappingURL=fetchOnline.js.map