import React, { useEffect, useState } from "react";
import ItemList from "../components/items/ItemList";
import { getFirestore } from "../firebase/index";
import { useParams } from "react-router-dom";


function Home() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId = undefined} = useParams();

  useEffect(() => {
    const db = getFirestore();
    let collection = db.collection("items");

    let query = categoryId ? collection.where("categoryId", "==", categoryId) : collection


    

    query
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No results!");
        }
        debugger;
        setItems(querySnapshot.docs.map(doc =>({...doc.data(), id: doc.id})));
        console.log(items);
      })
      .catch((error) => {
        console.log("Error searching item: ", error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [categoryId]);

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
