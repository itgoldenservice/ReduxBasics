import React from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./actions/index";

function mapDispatchToProps(dispatch) {
  return {
    increment: (counter) => dispatch(incrementCounter(counter)),
    decrement: (counter) => dispatch(decrementCounter(counter))
  };
}

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

function ConnectedCounter({ counter, increment, decrement }) {
  // Action: code that causes an update to the state when something happens
  const handleIncrement = () => {
    increment(counter + 1);
  };

  const handleDecrement = () => {
    decrement(counter - 1);
  };

  // View: the UI definition
  return (
    <div>
      Value: {counter}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

const CounterWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedCounter);

export default CounterWithRedux;
