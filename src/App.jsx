import { Routes, Route, Link } from "react-router-dom";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";


const App = () => {
  return (
    <>
      <nav className="flex gap-4 p-4 bg-gray-800 text-white">
        <Link to="/">Day1</Link>
        <Link to="/day2">Day2</Link>
        <Link to="/day3">Day3</Link>
        <Link to="/day4">Day4</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Day1/>} />
        <Route path="/day2" element={<Day2/>} />
        <Route path="/day3" element={<Day3/>} />
        <Route path="/day4" element={<Day4/>} />
      </Routes>
    </>
  );
};

export default App;
