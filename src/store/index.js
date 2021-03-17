import { createStore } from "redux";
import { incrementCounter } from "../actions";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;
window.store = store;
window.incrementCounter = incrementCounter;
