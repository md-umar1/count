import React, { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="body">
      <h1 className="cnt">Counter</h1>
      <p className="co">{count}</p>
      <button className="inc" onClick={increment}>
        Increment
      </button>
      <button className="dec" onClick={decrement}>
        Decrement
      </button>
      <button className="res" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
