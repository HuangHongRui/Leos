"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes = require("../actionType");
const API = require("../../request/api");
/**
 * 在线人数
 * @param None
 */
function fetchOnline() {
    return {
        type: ActionTypes.API_ONLINE,
        payload: API.ONLINE
    };
}
exports.fetchOnline = fetchOnline;
/**
 * 设置在线人数
 * @param {state、message、online}
 */
function setOnline(param) {
    return {
        type: ActionTypes.SET_ONLINE,
        payload: param
    };
}
exports.setOnline = setOnline;
/**
 * 运行历史时长
 * @param None
 */
function fetchRunTime() {
    return {
        type: ActionTypes.API_RUNTIME,
        payload: API.RUNTIME
    };
}
exports.fetchRunTime = fetchRunTime;
/**
 * 设置运行历史时长
 * @param {state、message、runtime}
 */
function setRunTime(param) {
    return {
        type: ActionTypes.SET_RUNTIME,
        payload: param
    };
}
exports.setRunTime = setRunTime;
/**
 * 注册
 * @param Email string
 * @param Password string
 * @param captcha string
 */
function fetchSign(param) {
    return {
        type: ActionTypes.API_SIGN,
        payload: { param }
    };
}
exports.fetchSign = fetchSign;
/**
 * 请求验证码
 * @param email: string
 */
function fetchCaptcha(param) {
    // tslint:disable-next-line
    console.log('☞☞☞ 9527 index 44', 111);
    return {
        type: ActionTypes.API_CAPTCHA,
        payload: {
            api: API.CAPTCHA,
            email: param
        }
    };
}
exports.fetchCaptcha = fetchCaptcha;
/**
 *  倒数计时
 *  @param: number
 */
function setCaptchaCountdown(param) {
    return {
        type: ActionTypes.SET_CPATCHA_COUNTDOWN,
        payload: param
    };
}
exports.setCaptchaCountdown = setCaptchaCountdown;
/**
 * TEST_example
 */
function test() {
    return {
        type: ActionTypes.TEST
    };
}
exports.test = test;
function test1() {
    return {
        type: ActionTypes.TESTONE
    };
}
exports.test1 = test1;
