import { useState } from "react";

const BgChange = () => {
  const [bg,setBg] = useState("bg-white");

  return (
    <div className={`p-6 ${bg}`}>
      <button className="btn" onClick={()=>setBg("bg-blue-200")}>Change Background</button>
    </div>
  );
};

export default BgChange;
