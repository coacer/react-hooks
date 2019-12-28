import React, { useContext }  from "react";
import { CountHandlerContext } from "./MyComponentRoot";

const MyComponentB: React.FC = () => {
  // useContextにcontextオブジェクトを渡すと返り値として値を取得できる
  const increment = useContext(CountHandlerContext);

  return (
    <button onClick={increment}>Increment!</button>
  )
};

export default MyComponentB;
