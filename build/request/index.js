"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const API = require("./api");
/*
 |--------------------------------------------------------------------------
 | Request Methods
 |--------------------------------------------------------------------------
 */
/**
 * 在线人数
 * @param None
 * @return Promise response
 */
function fetchOnline() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_1.default({
            method: 'GET',
            url: API.ONLINE
        });
        return result;
    });
}
exports.fetchOnline = fetchOnline;
/**
 * 注册账号
 * @param userInfo email string
 * @param userInfo password string
 * @param userInfo captcha string
 * @return Promise response
 */
function fetchSign(userInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield axios_1.default({
            method: 'POST',
            url: API.SIGN,
            data: userInfo
        });
        return result;
    });
}
exports.fetchSign = fetchSign;
