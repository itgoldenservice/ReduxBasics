import "./styles.css";
import CounterWithoutRedux from "./CounterWithoutRedux";
import CounterWithRedux from "./CounterWithRedux";

export default function App() {
  return (
    <div className="App">
      <h2>Counter without redux</h2>
      <CounterWithoutRedux />
      <hr />
      <h2>Counter with redux</h2>
      <CounterWithRedux />
    </div>
  );
}
