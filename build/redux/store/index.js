"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_dev_1 = require("./store.dev");
const store_prod_1 = require("./store.prod");
// tslint:disable-next-line
let store;
if (process.env.NODE_ENV === "production") {
    store = store_prod_1.default;
}
else {
    store = store_dev_1.default;
}
exports.default = store();
