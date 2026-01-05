import { useState } from "react";

const Counter = () => {
  const [count,setCount] =useState(0);

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl mb-2">{count}</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>+</button>
      <button className="btn mx-2" onClick={() => setCount(count - 1)}>-</button>
      <button className="btn" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
