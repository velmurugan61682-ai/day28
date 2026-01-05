import { useState } from "react";

const LoginToggle = () => {
  const [login, setLogin] = useState(false);

  return (
    <button className="btn" onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</button>);
};

export default LoginToggle;
