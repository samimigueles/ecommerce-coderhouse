import React from "react";

const ItemDetail = ({ item: { id, name, price, description, imageID } }) => {
  return (
    <div
      className="card mb-4 shadow-sm"
      style={{
        border: "solid black",
        alignContent: "center",
        alignItems: "center",
        width:350
      }}
    >
      <img src={imageID} alt={id} style={{ width: 150 }}></img>
      <div className="card-body">
        <p className="card-text">
          {" "}
          {name} - price: ${price}
        </p>
        <p>-{description}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
