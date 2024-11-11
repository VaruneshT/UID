import React, { useState } from "react";
import './App.css';  // Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="app-container">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
