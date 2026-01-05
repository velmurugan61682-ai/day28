import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "Vel", age: 22 });

  return (
    <div>
      <p>{profile.name} - {profile.age}</p>
      <button className="btn mt-2"onClick={() => setProfile({ ...profile, age: profile.age + 1 })} >Increase Age</button>
    </div>
  );
};

export default Profile;
