"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const reducer_1 = require("../reducer");
const devStore = () => {
    const store = redux_1.createStore(reducer_1.default, redux_devtools_extension_1.composeWithDevTools(
    // applyMiddleware(...middleware)
    ));
    return store;
};
exports.default = devStore;
