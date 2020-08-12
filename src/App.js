import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Invert from './components/videos/Invert';
import Footer from './components/footer/Footer';
import CountItem from './components/counter/CountItem'

function App() {
  return (
    <div className="App">
      <div>< Home /></div>
      <header className="App-header">
        < Invert />
        < CountItem />
      </header>
      < Footer />
    </div>
  );
}

export default App;
