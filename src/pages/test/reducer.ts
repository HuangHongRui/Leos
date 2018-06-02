import * as ActionType from './actionType';

const val = {
  haha: '123',
  xixi: [],
  hehe: 0
};

// tslint:disable-next-line
const counter = (state: any = val, action: any) => {
  const hehe = 'hehe';
  switch (action.type) {
    case ActionType.ADD:
      return { ...state, hehe: state[hehe] + 1 };
    case ActionType.DELETE:
      return { ...state, hehe: state[hehe] - 1 };
    default:
      return state;
  }
};

export default counter;
