import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions/index";

const getCounter = (state) => state.counter;

function CounterWithRedux() {
  // Action: code that causes an update to the state when something happens
  const counter = useSelector(getCounter);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter(counter + 1));
  };

  const handleDecrement = () => {
    dispatch(decrementCounter(counter - 1));
  };

  // View: the UI definition
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterWithRedux;
