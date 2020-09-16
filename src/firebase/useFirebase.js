import React, { useState } from "react";
import { getFirestore } from "./index";

export const useFirebase = () => {
  const [items, setItems] = useState([]);

  const getOneItem = async id => {
    try {
      const db = getFirestore();
      const item = db.collection("items").where("albumTitle", "==", id);
      const querySnapshot = await item.get();

      const theOneItem = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))[0];

      setItems(theOneItem);
      
    } catch (err) {
      console.log("getOneItem -> err");
      console.log("%c%s", "color: #00a3cc", err);
    }
  };

  return {items, getOneItem}
};
