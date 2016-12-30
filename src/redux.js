// actions
const DO_SOMETHING1 = 'DO_SOMETHING1';
const DO_SOMETHING2 = 'DO_SOMETHING2';

function doSomething1(payload) {
  return {
    type: DO_SOMETHING1,
    payload,
  };
}

function doSomething2(payload) {
  return {
    type: DO_SOMETHING2,
    payload,
  };
}


// reducers
import {combineReducers} from 'redux';

function somePortion1(state = '', action) {
  switch(action.type) {
    case DO_SOMETHING1:
      return action.payload;
    default:
      return state;
  }
}

function somePortion2(state = [], action) {
  switch(action.type) {
    case DO_SOMETHING2:
      return [...state, action.payload];
    default:
      return state;
  }
}

const someApp = combineReducers({
  somePortion1,
  somePortion2,
});


// store
import {createStore} from 'redux';

const store = createStore(someApp);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(doSomething1('hello, world!'));
store.dispatch(doSomething1('goodbye!'));
store.dispatch(doSomething2(1));
store.dispatch(doSomething2(2));

unsubscribe();
