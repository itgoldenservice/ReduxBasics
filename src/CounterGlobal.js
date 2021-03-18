import React from "react";
import { useSelector } from "react-redux";

const getCounter = (state) => state.counter;

function CounterGlobal() {
  // Action: code that causes an update to the state when something happens
  const counter = useSelector(getCounter);

  // View: the UI definition
  return <div>Global Counter Value: {counter}</div>;
}

export default CounterGlobal;
