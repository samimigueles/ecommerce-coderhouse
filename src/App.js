import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css';
import Home from './containers/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ItemDetailContainer from './components/items/ItemDetailContainer';
import CartIcon from './components/navbar/CartIcon';
import {CartProvider} from './context/CartContext'
import About from './containers/About';



function App() {

  const categories = [{name: 'Electronic', id: 'electronic'},{name: 'Material', id: 'material'}]

  return (
    <CartProvider>
     <div className="App"> 
      
      < NavBar  categories={categories}/>
      <Switch>
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/categories/:categoryId" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/cart" exact component={CartIcon} />
          <Route path="/item/:id/:name" exact component={ItemDetailContainer} />

        </header>
      </Switch>
      < Footer />
      

     </div > 
    </CartProvider>
  );
}

export default App;
