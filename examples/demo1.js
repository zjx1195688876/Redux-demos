import Redux from 'redux';

// actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function incrementCreator(number) {
  return {
    type: INCREMENT,
    number,
  };
}
function decrementCreator(number) {
  return {
    type: DECREMENT,
    number,
  };
}
// 初始化state
const initialState = {
  counter: 0,
};
// reducers函数，注意最后一定要return state防止不能匹配到action的时候state丢失
function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, {
        counter: state.counter + action.number,
      });
    case DECREMENT:
      return Object.assign({}, {
        counter: state.counter - action.number,
      });
    default: return state;
  }
}
// 创建store
const store = Redux.createStore(countReducer);
// 订阅store的修改
store.subscribe(function log() {
  console.log(store.getState());
});
// 通过dispatch action来改变state
store.dispatch(incrementCreator(5)); //Object {counter: 5}
store.dispatch(decrementCreator(4)); //Object {counter: 1}