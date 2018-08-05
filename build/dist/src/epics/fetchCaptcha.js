import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/merge';
import * as ActionTypes from '../redux/actionType';
export default function fetchCaptcha(action$) {
    return action$.ofType(ActionTypes.API_CAPTCHA)
        .mergeMap(function (action) { return Observable.merge(ajax.getJSON(action.payload.api)
        .map(function (res) { return res; })); });
}
//# sourceMappingURL=fetchCaptcha.js.map