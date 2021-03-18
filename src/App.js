import "./styles.css";
import CounterWithoutRedux from "./CounterWithoutRedux";
import CounterSharer from "./CounterSharer";
import CounterWithRedux from "./CounterWithRedux";
import AsyncRedux from "./AsyncRedux";
import CounterGlobal from "./CounterGlobal";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h2>Simple React Counter</h2>
      <CounterWithoutRedux setCounter={(counter) => setCounter(counter)} />
      <hr />

      <h2>Simple React Counter</h2>
      <CounterSharer counter={counter} />
      <hr />
      {/* <h2>Counter Global</h2>
      <CounterGlobal />
      <hr />
      <h2>Counter with redux</h2>
      <CounterWithRedux />
      <hr />
      <h2> Async Data</h2>
      <AsyncRedux /> */}
    </div>
  );
}
