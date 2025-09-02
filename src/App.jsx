import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Name Display</h1>

      {/* Input field */}
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Display name */}
      <p className="mt-6 text-xl text-blue-600 font-semibold">
        {name ? `Hello, ${name}! 👋` : "Start typing your name above..."}
      </p>
    </div>
  );
}

export default App;
