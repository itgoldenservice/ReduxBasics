export function print1({ dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      console.log("print1");
      return next(action);
    };
  };
}

export function print2({ dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      console.log("print2");
      return next(action);
    };
  };
}

export function print3({ dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      console.log("print3");
      return next(action);
    };
  };
}

// Middleware written as ES5 functions

// Outer function:
function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with storeAPI.dispatch(action)
      // Can also use storeAPI.getState() here

      return next(action);
    };
  };
}

export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};
