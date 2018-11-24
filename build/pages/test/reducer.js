"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionType = require("./actionType");
const val = {
    haha: '123',
    xixi: [],
    hehe: 0
};
// tslint:disable-next-line
const counter = (state = val, action) => {
    const hehe = 'hehe';
    switch (action.type) {
        case ActionType.ADD:
            return Object.assign({}, state, { hehe: state[hehe] + 1 });
        case ActionType.DELETE:
            return Object.assign({}, state, { hehe: state[hehe] - 1 });
        default:
            return state;
    }
};
exports.default = counter;
