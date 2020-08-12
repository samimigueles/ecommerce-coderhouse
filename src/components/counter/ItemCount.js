import React, { Component, useState } from 'react';

function ItemCount() {
    const [item, setItem] = useState(0);

    function addItem() {
        setItem(item + 1);
    }

    function restItem() {
        setItem(item - 1);
    }

    return <>
        <div style={{ display: 'flex', borderStyle: 'solid', borderColor: 'brown', padding: 5 }}>
            <button type='button' disabled={item === 0 ? true : false} onClick={restItem} style={{ margin: 10 }}><i class="fas fa-minus"></i></button>

            <p style={{ color: 'brown' }}> {item} </p>

            <button type='button' disabled={item === 5 ? true : false} onClick={addItem} style={{ margin: 10 }}><i class="fas fa-plus"></i></button>
        </div>
    </>
}

export default ItemCount;