"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const ajax_1 = require("rxjs/observable/dom/ajax");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/observable/merge");
const ActionTypes = require("../redux/actionType");
const action_1 = require("../redux/action");
function fetchRunTime(action$) {
    return action$.ofType(ActionTypes.API_RUNTIME)
        .mergeMap((action) => Observable_1.Observable.merge(ajax_1.ajax.getJSON(action.payload)
        .map((res) => res)
        .map(action_1.setRunTime)));
}
exports.default = fetchRunTime;
