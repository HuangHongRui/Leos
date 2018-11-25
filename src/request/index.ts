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
 * 注册账号
 * @param userInfo email string
 * @param userInfo password string
 * @param userInfo captcha string
 * @return Promise response
 */
export async function fetchSign(userInfo: {}) {
  const result = await axios({
    method: 'POST',
    url: API.SIGN,
    data: userInfo
  });
  return result;
}
