"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const history_1 = require("../../utils/history");
const react_router_redux_1 = require("react-router-redux");
const epics_1 = require("../../epics");
const RouterMiddleware = react_router_redux_1.routerMiddleware(history_1.default);
// tslint:disable-next-line
const epicMiddleware = redux_observable_1.createEpicMiddleware();
const middlewaresa = [
    epicMiddleware.run(epics_1.default),
    RouterMiddleware,
];
exports.default = middlewaresa;
