var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as ActionType from './actionType';
var val = {
    haha: '123',
    xixi: [],
    hehe: 0
};
// tslint:disable-next-line
var counter = function (state, action) {
    if (state === void 0) { state = val; }
    var hehe = 'hehe';
    switch (action.type) {
        case ActionType.ADD:
            return __assign({}, state, { hehe: state[hehe] + 1 });
        case ActionType.DELETE:
            return __assign({}, state, { hehe: state[hehe] - 1 });
        default:
            return state;
    }
};
export default counter;
//# sourceMappingURL=reducer.js.map