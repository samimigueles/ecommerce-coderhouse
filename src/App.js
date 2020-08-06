import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Salute from './components/salute/Salute';
import Threshold from './components/videos/Threshold';
import Invert from './components/videos/Invert';
import NavBar from './components/navbar/NavBar';
import Posterize from './components/videos/Posterize';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      < NavBar />
      <header className="App-header">
        < Salute />
        {/* < Posterize /> */}
        < Invert />
        {/* < Threshold /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      < Footer />
    </div>
  );
}

export default App;
