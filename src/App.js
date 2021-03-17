import "./styles.css";
import CounterWithoutRedux from "./CounterWithoutRedux";
import CounterWithRedux from "./CounterWithRedux";
import AsyncRedux from "./AsyncRedux";

export default function App() {
  return (
    <div className="App">
      <h2>Counter without redux</h2>
      <CounterWithoutRedux />
      <hr />
      <h2>Counter with redux</h2>
      <CounterWithRedux />
      <hr />
      <h2> Async Data</h2>
      <AsyncRedux />
    </div>
  );
}
