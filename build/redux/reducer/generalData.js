"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionType = require("../actionType");
const data = {
    online: 0,
    runtime: '',
    captchaTime: 0
};
const generalData = (state = data, action) => {
    switch (action.type) {
        case ActionType.SET_ONLINE:
            return Object.assign({}, state, { online: action.payload.online });
        case ActionType.SET_RUNTIME:
            return Object.assign({}, state, { runtime: action.payload.runtime });
        case ActionType.SET_CPATCHA_COUNTDOWN:
            return Object.assign({}, state, { captchaTime: action.payload });
        default:
            return state;
    }
};
exports.default = generalData;
