import { useState } from "react";

const NameForm = () => {
  const [name,setName] = useState("");

  return (
    <div>
      <input className="border p-2" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name"/>
      <p className="mt-2">{name}</p>
    </div>
  );
};

export default NameForm;
