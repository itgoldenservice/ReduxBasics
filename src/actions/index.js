import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from "../constants/actions-types";

export function incrementCounter(payload) {
  return { type: INCREMENT_COUNTER, payload };
}

export function decrementCounter(payload) {
  return { type: DECREMENT_COUNTER, payload };
}
