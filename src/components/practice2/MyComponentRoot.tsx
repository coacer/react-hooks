import React, { useReducer, createContext, Dispatch } from "react";
import MyComponentA from "./MyComponentA";

export const Context = createContext<Dispatch<string>>((() => {}) as any);

const reducer = (state: number, action: string): number => {
  switch(action) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
    default:
      return state;
  }
};

const MyComponentRoot: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Practice2</h1>
      <p>Count: {state}</p>
      <Context.Provider value={dispatch}>
        <MyComponentA />
      </Context.Provider>
    </>
  );
};

export default MyComponentRoot;
