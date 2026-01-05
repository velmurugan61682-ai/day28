import { useState } from "react";



export default function Day1() {
const [count, setCount] = useState(0);
const [login, setLogin] = useState(false);
const [like, setLike] = useState(false);
const [bg, setBg] = useState(false);
const [disabled, setDisabled] = useState(false);
const [name, setName] = useState("");
const [profile, setProfile] = useState({ name: "Vel", age: 22 });
const [items, setItems] = useState(["Apple"]);


const users =[{id: 1,name: "Arun"},{ id:2,name:"Kumar"}];


return (
<div className="p-6 space-y-4">
<h1 className="text-xl font-bold">DAY 1 – useState</h1>


<div>
<button onClick={() => setCount(count + 1)} className="btn">+</button>
<button onClick={() => setCount(count - 1)} className="btn">-</button>
<button onClick={() => setCount(0)} className="btn">Reset</button>
<p>{count}</p>
</div>


<ul>{users.map(u =><li key={u.id}>{u.name}</li>)}</ul>


<button onClick={() =>setLogin(!login)} className="btn">{login ? "Logout" : "Login"}</button>
<p>{login?"Admin" :"User"}</p>


<button onClick={()=>setLike(!like)} className="btn">{like?"Liked":"Like"}</button>


<div className={`${bg? "bg-yellow-200" :"bg-white"} p-4`}>
<button onClick={() => setBg(!bg)} className="btn">Change BG</button>
</div>


<button onClick={()=>setProfile({ ...profile,age: profile.age +1})} className="btn">{profile.name} - {profile.age}</button>


<button onClick={() => setItems([...items, "Orange"])} className="btn">Add</button>
<button onClick={() => setItems(items.slice(0, -1))} className="btn">Remove</button>


<button disabled={disabled} onClick={()=>setDisabled(true)} className="btn">Disable Me</button>


<input value={name} onChange={e =>setName(e.target.value)} className="border p-2" />
<p>{name}</p>
</div>
);
}