import { useState } from "react";



const Button = ({ text, onClick }) => (
<button onClick={onClick} className="btn">{text}</button>
);


const Day4 = () => {
const [todos, setTodos] = useState([]);
const [text, setText] = useState("");


const addTodo = () => {
if (!text.trim()) return;
setTodos([...todos, { text, done: false }]);
setText("");
};


const toggleDone = (index) => {
const copy = [...todos];
copy[index].done = !copy[index].done;
setTodos(copy);
};


const deleteTodo = (index) => {
setTodos(todos.filter((_,i) => i!==index));
};


return (
<div className="p-6 space-y-4">
<h1 className="text-xl font-bold">DAY 4 – Components (Arrow Only)</h1>


<input value={text}onChange={(e) => setText(e.target.value)}className="border p-2"placeholder="Enter todo"/>
<Button text="Add" onClick={addTodo} />


{todos.map((t, i) => (
<div key={i} className="flex gap-2 items-center">
<span className={t.done ? "line-through" : ""}>{t.text}</span>
<Button text="Done" onClick={() => toggleDone(i)} />
<Button text="Delete" onClick={() => deleteTodo(i)} />
</div>
))}
</div>
);
};


export default Day4;


