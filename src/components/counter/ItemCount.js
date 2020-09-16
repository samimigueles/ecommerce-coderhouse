import React from "react";
import useCounter from "../../hooks/useCounter";

const OnInput = ({ addItem, subtractItem, min, max, onCountChange, count }) => {
  return (
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
        justifyContent:'center'
      }}
    >
      <button
        type="button"
        disabled={count <= min ? true : false}
        onClick={subtractItem}
        style={{ margin: 25 }}
      >
        <i className="fas fa-minus"></i>
      </button>

      <input
        style={{ color: "brown", width: 50, textAlign: "center" }}
        type='number'
        value={count}
        onChange={(e) => onCountChange(e)}
      />

      <button
        type="button"
        disabled={count === max ? true : false}
        onClick={addItem}
        style={{ margin: 25 }}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

function ItemCount({ count, setCount, max, min, onAdd, onCountChange }) {
  /*  const [item, addItem, subtractItem] = useCounter(init); */

  return (
    <>
      <OnInput
        addItem={() => {
          setCount(count + 1);
        }}
        count={count}
        subtractItem={() => {
          setCount(count - 1);
        }}
        min={min}
        max={max}
        onCountChange={onCountChange}
      />
    </>
  );
}

export default ItemCount;
