import React, { useState } from "react";
import cartplus from "../assets/cartplus.svg";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { items, count } = useCartContext();
  const shop = () => {
    alert("Thanks for shopping!");
  };

  console.log(items);

  let suma = 0;
  items.forEach((i) => {
    suma += i.amount * i.price;
  });

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
                <img src={i.view} alt={i.name} style={{ width: 100 }}></img>
                {i.name} - price: ${i.price} x {i.amount} = $
                {i.price * i.amount}
              </li>
            ))}
            <img
              src={cartplus}
              alt="logo"
              style={{ width: 60 }}
              onClick={shop}
            />
            <p>Total ${suma}</p>
          </div>
        </>
      )}
    </>
  );
};

export default CartIcon;
