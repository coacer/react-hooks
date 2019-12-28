import React from 'react';
import './App.css';
import MyComponentRoot from "./components/practice1/MyComponentRoot";
import MyComponentRoot2 from "./components/practice2/MyComponentRoot";
import MyComponentRoot3 from "./components/practice3/MyComponentRoot";

const App: React.FC = () => (
  <>
    <MyComponentRoot />
    <MyComponentRoot2 />
    <MyComponentRoot3 />
  </>
);

export default App;
