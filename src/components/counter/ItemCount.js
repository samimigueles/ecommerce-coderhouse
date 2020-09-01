import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";

function ItemCount({ init, max, min, onAdd }) {
    const [item, addItem, subtractItem] = useCounter(init)


  return (
    <>
      <div style={{ alignSelf: "center" }}>
        <div
          style={{
            display: "flex",
            borderStyle: "solid",
            borderColor: "brown",
            padding: 6,
            alignItems: "center",
            alignContent: "center",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          <button
            type="button"
            disabled={item <= min ? true : false}
            onClick={subtractItem}
            style={{ margin: 25 }}
          >
            <i className="fas fa-minus"></i>
          </button>

          <p style={{ color: "brown" }}> {item} </p>

          <button
            type="button"
            disabled={item === max ? true : false}
            onClick={addItem}
            style={{ margin: 25 }}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <button
          type="button"
          onClick={onAdd}
          disabled={item === 0 ? true : false}
          style={{ width: 200, borderColor: "brown", marginTop: 10 }}
        >
          Add {item} products{" "}
        </button>
      </div>
    </>
  );
}

export default ItemCount;
