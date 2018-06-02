import * as ActionTypes from '../actionType';

// tslint:disable-next-line
export function fetchSign(query: any) {
  return {
    type: ActionTypes.API_SIGN,
    payload: { query }
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
