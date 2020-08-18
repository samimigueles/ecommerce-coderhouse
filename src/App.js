import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Footer from './components/footer/Footer';
import ItemCount from './components/counter/ItemCount';

function App() {

  function addProducts() {
    alert(` products were added`);
  }

  return (
    <div className="App">
      <div>< Home /></div>
      <header className="App-header">
      < ItemCount init={0} min={1} max={10} onAdd={addProducts} />
      </header>
      < Footer />
    </div>
  );
}

export default App;
