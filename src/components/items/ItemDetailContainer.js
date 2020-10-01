import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../counter/ItemCount";
import { CartContext } from "../../context/CartContext";
import ItemDetail from "./ItemDetail";

import { getFirestore } from "../../firebase/index";

const ItemDetailContainer = () => {
  const onAdd = () => {
    alert("products added");
  };
  const { id } = useParams();

  const [items, setItems] = useState([]);

  const [count, setCount] = useState(0);

  const onCountChange = (e) => {
    e.target.value === "" ? setCount(0) : setCount(parseInt(e.target.value));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item
      .get()
      .then((doc) => {
        debugger;
        console.log("Item found");
        setItems({ id: doc.id, ...doc.data() });
        console.log(items);
      })
      .catch((error) => {
        console.log("Error searching items:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <CartContext.Consumer>
        {({ addItem }) => (
          <>
            {loading ? (
              <p>Loading..</p>
            ) : (
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <ItemDetail item={items} />
                <ItemCount
                  min={3}
                  max={45}
                  count={count}
                  setCount={setCount}
                  onCountChange={onCountChange}
                  onAdd={onAdd}
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => addItem(items, count)}
                  disabled={count === 0 ? true : false}
                  style={{ width: 200, borderColor: "brown", marginTop: 10 }}
                >
                  Add {count} products{" "}
                </button>
              </div>
            )}
          </>
        )}
      </CartContext.Consumer>
    </>
  );
};

export default ItemDetailContainer;
