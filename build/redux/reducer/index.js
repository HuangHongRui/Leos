"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const react_router_redux_1 = require("react-router-redux");
const reducer_1 = require("../../pages/test/reducer");
const generalData_1 = require("./generalData");
exports.default = redux_1.combineReducers({
    test: reducer_1.default,
    generalData: generalData_1.default,
    router: react_router_redux_1.routerReducer
});
