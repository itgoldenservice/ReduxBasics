import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER
} from "../constants/actions-types";

const initialState = {
  counter: 0
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT_COUNTER || action.type === DECREMENT_COUNTER) {
    return {
      ...state,
      counter: action.payload
    };
  }
  return state;
}

export default rootReducer;
