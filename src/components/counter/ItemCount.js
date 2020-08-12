import React, { Component, useState } from 'react';

function ItemCount() {
    const [item, setItem] = useState(0);

    function addItem() {
        setItem(item + 1);
    }

    function subtractItem() {
        setItem(item - 1);
    }

    function addProducts(){
        if(item >= 2) alert(` ${item} products were added`);
        else  alert(` ${item} product were added`)
    }

    return <>
        <div>
            <div style={{ display: 'flex', borderStyle: 'solid', borderColor: 'brown', padding: 6 }}>
                <button type='button' disabled={item === 0 ? true : false} onClick={subtractItem} style={{ margin: 25 }}><i class="fas fa-minus"></i></button>

                <p style={{ color: 'brown' }}> {item} </p>

                <button type='button' disabled={item === 5 ? true : false} onClick={addItem} style={{ margin: 25 }}><i class="fas fa-plus"></i></button>
            </div>
            <button type='button' onClick={addProducts} disabled={item === 0 ? true : false} style={{width:200, borderColor:'brown', marginTop: 10}}>Add products</button>
        </div>
    </>
}

export default ItemCount;