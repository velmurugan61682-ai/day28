import { useRef } from "react";



export default function Day2() {
const inputRef = useRef();
const boxRef = useRef();
const countRef = useRef(0);
const videoRef = useRef();


return (
<div className="p-6 space-y-4">
<h1 className="text-xl font-bold">DAY 2 – useRef</h1>


<input ref={inputRef} className="border p-2" />
<button onClick={()=>inputRef.current.focus()} className="btn">Focus</button>
<button onClick={()=>inputRef.current.value = ""} className="btn">Clear</button>
<button onClick={()=>localStorage.setItem("text", inputRef.current.value)} className="btn">Save</button>


<div ref={boxRef} className="p-4 bg-gray-200">Box</div>
<button onClick={()=>boxRef.current.classList.toggle("bg-black")} className="btn">Theme</button>
<button onClick={()=>boxRef.current.style.fontSize = "24px"} className="btn">Font +</button>
<button onClick={()=>boxRef.current.classList.toggle("hidden")} className="btn">Show/Hide</button>


<video ref={videoRef} width="200" src="https://www.w3schools.com/html/mov_bbb.mp4" />
<button onClick={()=> videoRef.current.paused? videoRef.current.play() :videoRef.current.pause()} className="btn">Play/Pause</button>


<button onClick={()=>{ countRef.current++; alert(countRef.current) }}className="btn">Count Click</button>
</div>
);
}