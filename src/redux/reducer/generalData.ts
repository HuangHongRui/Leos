import * as ActionType from '../actionType';

const data = {
  online: '0'
};

const generalData = (state = data, action: ActionTypes) => {
  switch (action.type) {
    case ActionType.SET_ONLINE:
      return { ...state, online: action.payload.online };
    default:
      return state;
  }
};

export default generalData;

interface ActionTypes {
  type: string;
  payload: { online: string };
}
