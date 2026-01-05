import { Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import LoginToggle from "./components/LoginToggle";
import Profile from "./components/Profile";
import Role from "./components/Role";
import LikeButton from "./components/LikeButton";
import BgChange from "./components/BgChange";
import Items from "./components/Items";
import DisableBtn from "./components/DisableBtn";
import NameForm from "./components/NameForm";

const App = () => {
  return (
<>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Counter</Link>
        <Link to="/users">Users</Link>
        <Link to="/form">Form</Link>
      </nav>

      <div className="p-6 space-y-6">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/form" element={<NameForm />} />
        </Routes>

        <LoginToggle />
        <Profile />
        <Role />
        <LikeButton />
        <BgChange />
        <Items />
        <DisableBtn />
      </div>
   
  </>);
};

export default App;
