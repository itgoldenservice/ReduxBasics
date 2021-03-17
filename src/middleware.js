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

export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};
