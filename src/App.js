import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Home from './containers/Home';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Items from './components/items/Items';
import ItemDetail from './components/items/ItemDetail';
import CartIcon from './components/navbar/CartIcon';
import CartContext from './context/CartContext'



function App() {

  return (
    <CartContext.Provider value={[]}>
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
    </CartContext.Provider>
  );
}

export default App;
