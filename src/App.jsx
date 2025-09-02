import React from "react";

function App() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return (
    <>
      <h2 className="text-xl font-bold mb-2">Fruit List</h2>
      <ul className="list-disc pl-5">
        {fruits.map((fruit, index) => (
          <React.Fragment key={index}>
            <li>{fruit}</li>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

export default App;
