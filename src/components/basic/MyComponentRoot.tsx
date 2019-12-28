import React, { useState, useEffect, createContext } from 'react';
import MyComponentA from "./MyComponentA";

// contextの生成。コンテキストを使用するコンポーネントでimportする
export const CountHandlerContext = createContext(() => {});

const MyComponentRoot: React.FC = () => {
  // [state名, stateを変更する関数] = useState(stateの初期値);
  const [count, setCount] = useState(0);

  // useEffectに渡したコールバック関数はマウント時or再描画時に実行される
  useEffect(() => {
    const timerId = setTimeout(() => {
      alert("mounted or updated");
    }, 1000);
    // コールバック関数をreturnすると、アンマウント時or useEffectに与えた関数実行時に実行される
    return () => clearTimeout(timerId);
  });

  const handleClick = (): void => {
    // コールバックを使わない場合
    // setCount(count + 1);
    // 変更先が変更元のstateに依存してる時はコールバック関数を入れる
    setCount((count: number): number => count + 1);
  };

  return (
    <>
      <h1>Practice1</h1>
      <p>{count}</p>
    {/*
      コンテキスト名.Providerコンポーネントでラップしたコンポーネント下はcontextを使用できる
      必ずpropsとしてvalueを与える
      valueはcontextの値
    */}
      <CountHandlerContext.Provider value={handleClick}>
        <MyComponentA />
      </CountHandlerContext.Provider>
    </>
  )
};

export default MyComponentRoot;
