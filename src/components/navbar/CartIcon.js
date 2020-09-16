import React, { Fragment, useState } from "react";
import cartplus from "../assets/cartplus.svg";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import * as firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/index";

 /* async function CreateOrder() {
  const db = getFirestore();
  const orders = db.collection("orders");

  const newOrder = {
    buyer: "userInfo",
    items: [{ id: 2 }, { id: 3 }],
    date: firebase.firestore.FieldValue.serverTimestamp(),
    total: 200,
  };

   orders.add(newOrder).then(({ id }) => {
     console.log(id)
   }) 

  try {
    const { id } = await orders.add(newOrder);
    console.log(id);
  } catch (err) {
    // seteamos feedback para el user
    console.log("Error");
  }
*/

const CartIcon = () => {

  const { items, clean } = useCartContext();
  let suma = 0;
  items.forEach((i) => {
    suma += i.amount * i.price;
  });

  const products = items.map((item) => ({
    title: item.name,
    price: item.price,
    id: item.id,
  }));

  const [userInfo, setUserInfo] = useState({
    name: '',
    mail: '',
    phone: ''
  });

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: [event.target.value]
    })
    console.log(userInfo)
  }


  const order = {
    buyer: userInfo,
    items: products,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    total: suma,
  };

  console.log(order)

  function CreateOrder() {
    const db = getFirestore();
    const orders = db.collection("orders");

    orders.add(order).then(({ id }) => {
      console.log(id)
    })
  }


  return (
    <>
      {items.length === 0 ? (
        <>
          <h2>The cart is empty</h2>
          <Link to="/">Please, select an item from our catalogue</Link>
        </>
      ) : (
          <>
            <div>
              <h2>Products</h2>
              {items.map((i, id) => (
                <li key={id}>
                  <img src={i.imageID} alt={i.name} style={{ width: 100 }}></img>
                  {i.name} - price: ${i.price} x {i.amount} = $
                  {i.price * i.amount}
                </li>
              ))}
              <img
              src={cartplus}
              alt="logo"
              style={{ width: 60 }}
              onClick={CreateOrder}
            /> 
              <p>Total ${suma}</p>

              <Fragment>
                <div className="container mt-5">
                  <h1>Provide your info for create your order</h1>
                  <form className="row">
                    <div className="col md-3">
                      <input
                        type="text"
                        placeholder="name"
                        className="form-control"
                        name='name'
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col md-3">
                      <input
                        type="text"
                        placeholder="mail"
                        className="form-control"
                        name='mail'
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col md-3">
                      <input
                        type="text"
                        placeholder="phone"
                        className="form-control"
                        name='phone'
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col md-3">
                      <button className="btn btn-primary" onClick={CreateOrder}>Send</button>
                    </div>
                  </form>
                </div>
              </Fragment>

              <button className="btn btn-primary" type="submit" onClick={clean}>
                Remove
            </button>
            </div>
          </>
        )}
    </>
  );
};

export default CartIcon;
