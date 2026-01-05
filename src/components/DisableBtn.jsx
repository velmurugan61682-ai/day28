import { useState } from "react";

const DisableBtn = () => {
  const [disabled, setDisabled] = useState(false);
return (
    <button className="btn" disabled={disabled} onClick={() => setDisabled(true)}>Click Once</button>
  );
};

export default DisableBtn;
