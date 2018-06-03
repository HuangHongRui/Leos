import * as ActionTypes from '../actionType';
import * as API from '../../request/api';

/**
 * 在线人数
 * @param None
 * @return Promise response
 */
export function fetchOnline() {
  return {
    type: ActionTypes.API_ONLINE,
    payload: API.ONLINE
  };
}

/**
 * 设置在线人数
 * @param {state、message、online}
 * @return Promise response
 */
export function setOnline(param: {}) {
  return {
    type: ActionTypes.SET_ONLINE,
    payload: param
  };
}

/**
 * 注册
 * @param Email string
 * @param Password string
 * @param captcha string
 */
export function fetchSign(param: {}) {
  return {
    type: ActionTypes.API_SIGN,
    payload: { param }
  };
}

/**
 * TEST_example
 */
export function test() {
  return {
    type: ActionTypes.TEST
  };
}

export function test1() {
  return {
    type: ActionTypes.TESTONE
  };
}
