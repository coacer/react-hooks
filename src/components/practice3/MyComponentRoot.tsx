import React, { useState, useCallback } from "react";
import MyComponentA from "./MyComponentA";

const MyComponentRoot: React.FC = () => {
  const [ count, setCount ] = useState(0);
  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <>
      <h1>Practice3</h1>
      {count}
    <MyComponentA callback={increment} />
    </>
  );
};

export default MyComponentRoot;

