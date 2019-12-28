import React, { useContext } from "react";
import { Context } from "./MyComponentRoot";

const MyComponentA: React.FC = () => {
  const dispatch = useContext(Context);
  return (
    <div>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
    </div>
  );
}

export default MyComponentA;
