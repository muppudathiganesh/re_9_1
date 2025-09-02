import { useState } from "react";
import "./App.css"; // Import CSS

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className="count">Count: {count}</p>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)} className="btn increase">
          +
        </button>
        <button onClick={() => setCount(count - 1)} className="btn decrease">
          -
        </button>
        <button onClick={() => setCount(0)} className="btn reset">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
