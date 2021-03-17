// import { createStore } from "redux";
// import { incrementCounter } from "../actions";
// import rootReducer from "../reducers/index";

// const store = createStore(rootReducer);

// window.store = store;
// window.incrementCounter = incrementCounter;

// //Dispatch example
// store.dispatch(incrementCounter(9));

// //Selector example
// const selectCounterValue = (state) => state.counter;
// const counter = selectCounterValue(store.getState());
// console.log("Via Selector", counter);
// export default store;

//MiddleWare Example
/* import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { print1, print2, print3, loggerMiddleware } from "../middleware";

const middlewareEnhancer = applyMiddleware(
  print1,
  print2,
  print3,
  loggerMiddleware
);

// Pass enhancer as the second arg, since there's no preloadedState
const store = createStore(rootReducer, middlewareEnhancer);

export default store;
 */

//Thunk

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// The store now has the ability to accept thunk functions in `dispatch`
const store = createStore(rootReducer, composedEnhancer);
export default store;
