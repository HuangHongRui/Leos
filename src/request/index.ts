import axios from 'axios';
import * as API from './api';

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
export async function fetchOnline() {
  const result = await axios({
    method: 'GET',
    url: API.ONLINE
  });
  return result;
}

/**
 * 運行時長
 * @param None
 * @return Promise response
 */
export async function fetchRunTime() {
  const result = await axios({
    method: 'GET',
    url: API.RUNTIME
  });
  return result;
}

/**
 *  功能: 验证邮箱是否注册
 *  @param email str
 */
export async function fetchVerifyEmail(email) {
  const result = await axios({
    method: 'GET',
    url: `${API.VERIFYEMAIL}?email=${email}`,
  });
  return result
}

/**
 *  功能: 发送注册验证码
 *  @param email str
 */
export async function fetchSendEmail(email) {
  const result = await axios({
    method: 'GET',
    url: `${API.SENDEMAIL}?email=${email}`,
  });
  return result
}

/**
 *  功能: 验证验证码
 *  @param email str
 *  @param vCode str
 */
export async function fetchVerifyCode(email, vCode) {
  const result = await axios({
    method: 'GET',
    url: `${API.VERIFYCODE}?email=${email}&vCode=${vCode}`,
  });
  return result
}

/**
 * 注册账号
 * @param userInfo email string
 * @param userInfo password string
 * @param userInfo captcha string
 * @return Promise response
 */
export async function fetchSignUp(userInfo: {}) {
  const result = await axios({
    method: 'POST',
    url: API.SIGN_UP,
    data: userInfo
  });
  return result;
}

/**
 * 登录账号
 * @param userInfo email string
 * @param userInfo password string
 */
export async function fetchSignIn(userInfo: {}) {
  const result = await axios({
    method: 'POST',
    url: API.SIGN_IN,
    data: userInfo
  });
  return result;
}