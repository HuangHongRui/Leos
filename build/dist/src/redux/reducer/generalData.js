var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as ActionType from '../actionType';
var data = {
    online: '0',
    captchaTime: 0
};
var generalData = function (state, action) {
    if (state === void 0) { state = data; }
    switch (action.type) {
        case ActionType.SET_ONLINE:
            return __assign({}, state, { online: action.payload.online });
        case ActionType.SET_CPATCHA_COUNTDOWN:
            return __assign({}, state, { captchaTime: action.payload });
        default:
            return state;
    }
};
export default generalData;
//# sourceMappingURL=generalData.js.map