const UserList = () => {
  const users = [ { id: 1,name:"Arun" }, { id: 2,name:"Vel"}];

  return (
    <ul className="list-disc pl-5">
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
};

export default UserList;
