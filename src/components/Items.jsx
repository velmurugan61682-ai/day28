import { useState } from "react";

const Items = () => {
  const [items, setItems] = useState(["Apple"]);

  return (
    <div>
      <button className="btn" onClick={() => setItems([...items, "Orange"])}>Add</button>
      <button className="btn ml-2" onClick={() => setItems(items.slice(0, -1))}>Remove</button>

      <ul className="mt-2">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Items;
