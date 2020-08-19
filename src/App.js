import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Footer from './components/footer/Footer';

import NavBar from './components/navbar/NavBar';

function App() {



  return (
    <div className="App">
      <div>< NavBar /></div>
      <header className="App-header">
      < Home />
      </header>
      < Footer />
    </div>
  );
}

export default App;
