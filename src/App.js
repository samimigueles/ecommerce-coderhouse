import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ItemDetail from './components/items/ItemDetail';
import CartIcon from './components/navbar/CartIcon';
import {CartProvider} from './context/CartContext'



function App() {

  return (
    <CartProvider>
     <div className="App"> 
      
      < NavBar />
      <Switch>
        <header className="App-header">
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={CartIcon} />
          <Route path="/item/:id" exact component={ItemDetail} />

        </header>
      </Switch>
      < Footer />
      

     </div > 
    </CartProvider>
  );
}

export default App;
