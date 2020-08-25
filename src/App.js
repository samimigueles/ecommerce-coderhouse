import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ItemContainer from './components/items/ItemContainer';

function App() {

  return (
    <div className="App">

      < NavBar />

      <header className="App-header">
        < Home />
      </header>

      < Footer />

    </div>
  );
}

export default App;
