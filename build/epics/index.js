"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_observable_1 = require("redux-observable");
const fetchSign_1 = require("./fetchSign");
const fetchOnline_1 = require("./fetchOnline");
const fetchCaptcha_1 = require("./fetchCaptcha");
const fetchRunTime_1 = require("./fetchRunTime");
exports.default = redux_observable_1.combineEpics(fetchSign_1.default, fetchOnline_1.default, fetchCaptcha_1.default, fetchRunTime_1.default);
