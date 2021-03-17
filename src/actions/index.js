import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from "../constants/actions-types";

export function incrementCounter(payload) {
  console.log(payload);
  return { type: INCREMENT_COUNTER, payload };
}

export function decrementCounter(payload) {
  return { type: DECREMENT_COUNTER, payload };
}

export function makeAPICall() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      return { type: "DATA_LOADED", payload: json };
    });
}

export function makeAPICallWithThunk() {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
