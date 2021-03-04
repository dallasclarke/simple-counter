import React from "react";

import "./App.css";
import Counter from "./Counter";
import Counter2 from "./CounterHooks";

function App() {
  return (
    <main className="Application">
      <section className="Counters">
        <Counter2 max={15} step={5} /> 
      </section>
    </main>
  )
}

export default App;
