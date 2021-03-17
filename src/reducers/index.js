import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  DATA_LOADED
} from "../constants/actions-types";

const initialState = {
  counter: 0,
  data: []
};

function rootReducer(state = initialState, action) {
  if (action.type === INCREMENT_COUNTER || action.type === DECREMENT_COUNTER) {
    return {
      ...state,
      counter: action.payload
    };
  }
  if (action.type === DATA_LOADED) {
    return {
      ...state,
      data: action.payload
    };
  }
  return state;
}

export default rootReducer;
