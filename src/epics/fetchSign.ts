import { Observable } from 'rxjs/Rx';
import { push } from 'react-router-redux';
import * as ActionTypes from '../redux/actionType';
import { test1 } from '../redux/action';

// tslint:disable-next-line
export default function adminAccess(action$: any) {
  return action$.ofType(ActionTypes.TEST)
    .delay(2000)
    .mergeMap(() => Observable.merge(
      Observable.of(test1()),
      Observable.timer(2000)
        .map(() => push('/'))
    ));
}
