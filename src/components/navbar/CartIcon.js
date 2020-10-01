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
    quantity: item.amount,
    id: item.id,
  }));

  const [userInfo, setUserInfo] = useState({
    name: "",
    mail: "",
    confirm: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
    console.log(userInfo);
  };

  const order = {
    buyer: userInfo,
    items: products,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    total: suma,
  };

  console.log(order);

  function openForm() {
    document.getElementById("checkout").style.display = "block";
    document.getElementById("btnConfirm").style.display = "none";
  }

  function CreateOrder() {
    const db = getFirestore();
    const orders = db.collection("orders");

    orders
      .add(order)
      .then(({ id }) => {
        alert(`Your order n° ${id} is sucefully created`);
        console.log(id);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(clean);
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
          <div style={{ textAlign: "center", alignItems: "center" }}>
            <h2>Your order</h2>
            {items.map((i, id) => (
              <li
                key={id}
                style={{
                  textAlign: "left",
                  alignItems: "center",
                  display: "inline-listitem",
                }}
              >
                <img src={i.imageID} alt={i.name} style={{ width: 100 }}></img>
                {i.name} - price: ${i.price} x {i.amount} = $
                {i.price * i.amount}
              </li>
            ))}
            <hr/>

            <p>Total ${suma}</p>

            <div>
              <button id="btnConfirm" className="btn btn-primary" onClick={openForm}>
                Confirm
              </button>
            </div>

            <Fragment>
              <div
                className="container mt-5"
                id="checkout"
                style={{ display: "none" }}
              >
                <h3>Provide your info for create your order</h3>
                <form className="row">
                  <div className="col md-3">
                    <input
                      type="text"
                      placeholder="name"
                      className="form-control"
                      name="name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col md-3">
                    <input
                      type="text"
                      placeholder="mail"
                      className="form-control"
                      name="mail"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col md-3">
                    <input
                      type="text"
                      placeholder="confirm mail"
                      className="form-control"
                      name="confirm"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col md-3">
                    <input
                      type="number"
                      placeholder="phone"
                      className="form-control"
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col md-3"></div>
                </form>
                <div style={{ display: "inline-box" }}>
                  <button
                    style={{ margin: 20 }}
                    className="btn btn-primary"
                    disabled={
                      userInfo.mail !== userInfo.confirm ||
                      userInfo.name === "" ||
                      userInfo.phone === ""
                        ? true
                        : false
                    }
                  >
                    <img
                      src={cartplus}
                      alt="logo"
                      style={{ width: 30 }}
                      onClick={CreateOrder}
                    />
                    Buy
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={clean}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </Fragment>
          </div>
        </>
      )}
    </>
  );
};

export default CartIcon;
