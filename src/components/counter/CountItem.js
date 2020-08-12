import React, { Component, useState } from 'react';

function CountItem() {
  const [item, setItem] = useState(0);

  function addItem () {
    setItem(item +1);
  }

  function restItem(){
  setItem(item - 1);
  }

  return <>
  <div style={{display:'flex', borderStyle:'solid', borderColor:'brown', padding:5}}>
  <button type='button' disabled={item === 0 ? true : false} onClick={restItem}>-</button>

  <p style={{color: 'brown'}}> {item} </p>

  <button type='button' disabled={item === 5 ? true : false} onClick={addItem}>+</button>
  </div>
  </>
}

export default CountItem;