"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const middleware_1 = require("../middleware");
const reducer_1 = require("../reducer");
const configureStore = () => {
    const store = redux_1.createStore(reducer_1.default, redux_1.applyMiddleware(...middleware_1.default));
    return store;
};
exports.default = configureStore;
