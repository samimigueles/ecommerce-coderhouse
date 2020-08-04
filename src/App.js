import React from 'react';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './App.css';
import Salute from './components/Salute/Salute';
import Threshold from './components/Videos/Threshold';
import Invert from './components/Videos/Invert';
import Navbar from './components/Navbar';
import Posterize from './components/Videos/Posterize';

function App() {
  return (
    <div className="App">
      < Navbar />
      <header className="App-header">
        < Salute />
        < Posterize />
        < Invert />
        < Threshold />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
