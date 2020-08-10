import React,{useState} from 'react';
import './App.css';
import Parents from './Prents';
import CounterContext from './CounterContext.js'; 

function App() {
  let counter=useState(1);
  return (
    <CounterContext.Provider value={counter}>
    <div>
      <Parents name="Wardha"/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
