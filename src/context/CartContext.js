import React, { useState, useContext } from "react";

export const CartContext = React.createContext();

export const useCartContext = () => useContext(CartContext);

export function CartProvider({ value = [], children }) {
  const [items, setItems] = useState(value);
  const [count, setCount] = useState(0);

  function addItem(item, amount) {
    if (items.some((elem) => elem.id === item.id)) {
      const repeatedIndex = items.findIndex((el) => el.id === item.id);
      const itemsCopy = [...items];
      itemsCopy[repeatedIndex] = {
        ...itemsCopy[repeatedIndex],
        amount: itemsCopy[repeatedIndex].amount + amount,
      };
      setItems(itemsCopy);
    } else {
      setItems([
        ...items,
        {
          ...item,
          amount,
        },
      ]);
    }
    setCount(count + amount);
  }

  return (
    <CartContext.Provider value={{ items, count, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
