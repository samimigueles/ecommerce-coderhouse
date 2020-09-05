import React, { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import { getFirestore } from "../firebase/index";

const getItem = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          name: "transistor",
          price: 50,
          description: "Electronic component",
          view:
            "https://cdmxelectronica.com/wp-content/uploads/AR0258-Transistor-BC547B.jpg",
        },
        {
          id: 2,
          name: "potentiometer",
          price: 65,
          description: "Electronic component",
          view:
            "https://upload.wikimedia.org/wikipedia/commons/b/b5/Potentiometer.jpg",
        },
        {
          id: 3,
          name: "resistor",
          price: 45,
          description: "Electronic component",
          view:
            "https://www.diyelectronics.co.za/store/10512-thickbox_default/resistor-220-ohm-14w-5.jpg",
        },
      ]);
    }, 2000);
  });
};

function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* const db = getFirestore();
    const itemCollection = db.collection("items");
    const higherPrice = itemCollection.where('price', '>', '45')

    itemCollection.get().then */
    
    getItem().then(res => {
            setLoading(false);
            setItems(res);
        })
  });

  return (
    <div
      style={{
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <header style={{ display: "flex" }}>
        {loading && <h5>Loading...</h5>}

        <ItemList items={items} />
      </header>
    </div>
  );
}

export default Home;
