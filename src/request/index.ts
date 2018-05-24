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
 * @return Promise axios response
 * */
export async function fetchOnline() {
  const result = await axios({
    method: 'GET',
    url: API.ONLINE,
  });
  return result;
}
