import React, { useEffect } from "react";

interface Props {
  callback: () => void;
}

const MyComponentA: React.FC<Props> = ({ callback }) => {
  useEffect(() => {
    alert("更新されました"); // なぜか呼び出される。useCallbackの仕組みがよくわからん
  });

  return (
    <button onClick={callback}>Click</button>
  );
};

export default MyComponentA;
