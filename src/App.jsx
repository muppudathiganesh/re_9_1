import { useState } from "react";

function App() {
  // state to hold count value
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Click Counter</h1>
      <p className="text-xl mb-4">You clicked {count} times</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
