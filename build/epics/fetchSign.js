"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_redux_1 = require("react-router-redux");
const ActionTypes = require("../redux/actionType");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/map");
// tslint:disable-next-line
function fetchSign(action$) {
    return action$.ofType(ActionTypes.API_SIGN)
        .delay(2000)
        .map(() => react_router_redux_1.push('/'));
}
exports.default = fetchSign;
