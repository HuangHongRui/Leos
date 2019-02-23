import * as ActionTypes from "../actionType";
import * as API from "src/request/api";
import * as Req from 'src/request';

/**
 * 在线人数
 * @param None
 */
export function fetchOnline() {
  return function (dispatch) {
    Req.fetchOnline()
      .then(e => dispatch(setOnline(e.data)));
  };
};


/**
 * 设置在线人数
 * @param {state、message、online}
 */
export function setOnline(param: {}) {
  return {
    type: ActionTypes.SET_ONLINE,
    payload: param
  };
}

/**
 * 运行历史时长
 * @param None
 */
export function fetchRunTime() {
  return function (dispatch) {
    Req.fetchRunTime()
      .then(e => dispatch(setRunTime(e.data)));
  }
}

/**
 * 设置运行历史时长
 * @param {state、message、runtime}
 */
export function setRunTime(param: {}) {
  return {
    type: ActionTypes.SET_RUNTIME,
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
    payload: {param}
  };
}

/**
 * 请求验证码
 * @param email: string
 */
export function fetchCaptcha(param: string) {
  return {
    type: ActionTypes.API_CAPTCHA,
    payload: {
      api: API.CAPTCHA,
      email: param
    }
  };
}

/**
 *  倒数计时
 *  @param: number
 */
export function setCaptchaCountdown(param: number) {
  return {
    type: ActionTypes.SET_CPATCHA_COUNTDOWN,
    payload: param
  };
}

/**
 * 登录狀態
 */
export function action_isLogin() {
  return function (dispatch) {
    Req.fetchIsLogin()
      .then(e => dispatch(action_setLoginStatus(e.data)));
  }
}

/**
 * 保存登錄態
 */
export function action_setLoginStatus(param: {}) {
  return {
    type: ActionTypes.SET_LOGIN_STATUS,
    payload: param
  }
}