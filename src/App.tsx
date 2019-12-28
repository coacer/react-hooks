import React from 'react';
import './App.css';
import MyComponentRoot from "./components/basic/MyComponentRoot";
import MyComponentRoot2 from "./components/2/MyComponentRoot";

const App: React.FC = () => (
  <>
    <MyComponentRoot />
    <MyComponentRoot2 />
  </>
);

export default App;
