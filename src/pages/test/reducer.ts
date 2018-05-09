import * as ActionType from './actionType'

const val = {
  haha: '123',
  xixi: [],
  hehe: 0
};

const counter = (state: any = val, action: any) => {
  console.log('☞☞☞ 9527 something 8', state);
  switch (action.type) {
    case ActionType.ADD:
      return {...state, hehe: state['hehe'] + 1 };
    case ActionType.DELETE:
      return {...state, hehe: state['hehe'] - 1 };
    default:
      return state
  }
};

export default counter
