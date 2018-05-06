const val = {
  haha: '123',
  xixi: [],
  hehe: 123
};
const counter = ({...state}: any = val, action: any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.hehe + 1;
    case 'DECREMENT':
      return state.hehe - 1;
    default:
      return state
  }
}

export default counter
