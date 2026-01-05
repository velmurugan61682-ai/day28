const Role = () => {
  const isAdmin = true;
  return(<> <h2>{isAdmin ? "Admin" : "User"}</h2>;</>)
};

export default Role;
