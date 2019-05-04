import * as ActionType from '../actionType';

const data = {
  online: 0,
  runtime: '',
  captchaTime: 0
};

const generalData = (state = data, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.SET_LOGIN_STATUS:
      return {...state, isLogin: action.payload.data};
    case ActionType.SET_ONLINE:
      return {...state, online: action.payload.online};
    case ActionType.SET_RUNTIME:
      return {...state, runtime: action.payload.runtime};
    case ActionType.SET_CPATCHA_COUNTDOWN:
      return {...state, captchaTime: action.payload};
    default:
      return state;
  }
};

export default generalData;

interface ActionTypes {
  type: string;
  payload: {
    status: number;
    online: string | number;
    runtime: string | number;
    captchaTime: number;
    data: {}
  };
}
