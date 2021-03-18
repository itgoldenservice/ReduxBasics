import "./styles.css";
import CounterWithoutRedux from "./CounterWithoutRedux";
import CounterWithRedux from "./CounterWithRedux";
import AsyncRedux from "./AsyncRedux";
import CounterGlobal from "./CounterGlobal";

export default function App() {
  return (
    <div className="App">
      <h2>Simple React Counter</h2>
      <CounterWithoutRedux />
      <hr />
      <h2>Counter Global</h2>
      <CounterGlobal />
      <hr />
      <h2>Counter with redux</h2>
      <CounterWithRedux />
      <hr />
      <h2> Async Data</h2>
      <AsyncRedux />
    </div>
  );
}
