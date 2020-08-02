import React from 'react';
import logo from './logo.svg';
import './App.css';
import Salute from './components/Salute/Salute';
import Name from './components/Name/Name';
import Aspect from './components/Name/Aspect';
import Filter from './components/Name/Filter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        < Salute /> 
        < Aspect />
        < Filter />
        < Name />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
