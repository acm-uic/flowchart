import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./annshagrawaal"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sig WebDev Flowchart Application
        </p>
        <Button/>
      </header>
    </div>
  );
}

export default App;
