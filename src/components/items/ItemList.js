import React from 'react';
import Items from './Items';

const ItemList = ({items}) => {
    return (
        <div className='container'>
            <div className='row'>
                {items.map(item => <Items item={item} />)}
            </div>
        </div>
    )
}

export default ItemList;