import { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  return (
    <button className="btn" onClick={() => setLike(!like)}> {like?"Liked" :"Like"}</button>
  );
};

export default LikeButton;
