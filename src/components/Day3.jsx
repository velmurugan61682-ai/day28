import { useEffect, useRef, useState } from "react";

export default function Day3() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    console.log("Mounted");
  }, []);

 
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer");
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setData(users);
    };

    fetchUsers();
  }, []);

 
  useEffect(() => {
    document.title =`Count ${count}`;
  }, [count]);

 
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">DAY 3 – useEffect</h1>

      <button onClick={() => setCount(count + 1)}className="px-4 py-2 bg-blue-500 text-white rounded">{count}</button>

      <input ref={inputRef} className="border p-2 block" />

      <ul className="list-disc pl-5">
        {data.map(user =>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
