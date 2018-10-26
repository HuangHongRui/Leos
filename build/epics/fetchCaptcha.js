"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Observable_1 = require("rxjs/Observable");
const ajax_1 = require("rxjs/observable/dom/ajax");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/observable/merge");
const ActionTypes = require("../redux/actionType");
function fetchCaptcha(action$) {
    return action$.ofType(ActionTypes.API_CAPTCHA)
        .mergeMap((action) => Observable_1.Observable.merge(ajax_1.ajax.getJSON(action.payload.api)
        .map((res) => res)));
}
exports.default = fetchCaptcha;
