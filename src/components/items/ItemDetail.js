import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../counter/ItemCount";
import { CartContext } from "../../context/CartContext";

const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(
        [
          {
            id: "1",
            name: "transistor",
            price: 50,
            description: "Electronic component",
            view:
              "https://cdmxelectronica.com/wp-content/uploads/AR0258-Transistor-BC547B.jpg",
          },
          {
            id: "2",
            name: "potentiometer",
            price: 65,
            description: "Electronic component",
            view:
              "https://upload.wikimedia.org/wikipedia/commons/b/b5/Potentiometer.jpg",
          },
          {
            id: "3",
            name: "resistor",
            price: 45,
            description: "Electronic component",
            view:
              "https://www.diyelectronics.co.za/store/10512-thickbox_default/resistor-220-ohm-14w-5.jpg",
          },
        ].find((i) => i.id === id)
      );
    }, 2000);
  });
};

const ItemDetail = () => {
  const onAdd = () => {
    alert("products added");
  };

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [count, setCount] = useState(3);

  const onCountChange = (e) => {
    e.target.value === "" ? setCount(0) : setCount(parseInt(e.target.value));
  };

  useEffect(() => {
    getItem(id).then((res) => {
      console.log(res);
      setProduct(res);
      console.log(product);
    });
    return () => console.log("dismount");
  }, [id]);

  return (
    <CartContext.Consumer>
      {({ addItem }) => (
        <>
          <div className="card-body">
            {product && <p> {product.name}</p>}
            {product && (
              <img src={product.view} alt={product.name} style={{ width: 250 }}></img>
            )}
            {product && <p> {product.description}</p>}
            {product && <p>price: ${product.price}</p>}
            <ItemCount
              min={3}
              max={45}
              count={count}
              setCount={setCount}
              onCountChange={onCountChange}
              onAdd={onAdd}
            />
            <button
              type="button"
              onClick={() =>addItem(product, count)}
              disabled={count === 0 ? true : false}
              style={{ width: 200, borderColor: "brown", marginTop: 10 }}
            >
              Add {count} products{" "}
            </button>
          </div>
        </>
      )}
    </CartContext.Consumer>
  );
};

export default ItemDetail;
