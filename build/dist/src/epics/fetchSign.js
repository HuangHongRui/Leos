import { push } from 'react-router-redux';
import * as ActionTypes from '../redux/actionType';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
// tslint:disable-next-line
export default function fetchSign(action$) {
    return action$.ofType(ActionTypes.API_SIGN)
        .delay(2000)
        .map(function () { return push('/'); });
}
//# sourceMappingURL=fetchSign.js.map