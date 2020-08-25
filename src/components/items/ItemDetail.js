import React from 'react';

 const ItemDetail = ({item: {id, name, price, view}}) => {
    return (
        <div>
            <img src={view} alt={name} style={{border: 'solid black', width:200}} />
            <h2>{`${name}, price: $ ${price}`}</h2><br/>
            <p>npn transistor for multi purpose in electronic application</p>
        </div>
    )
}

export default ItemDetail;
