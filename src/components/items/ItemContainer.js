import React, { useEffect, useState } from 'react';
import ItemDetail from '../items/ItemDetail';
import ItemCount from '../counter/ItemCount';

export default function ItemContainer() {
    function addProducts() {
        alert(` products were added`);
    }
    
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true)

    const getItem = new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: '1', name: 'transistor', price: 50, view: 'https://cdmxelectronica.com/wp-content/uploads/AR0258-Transistor-BC547B.jpg' })
        }, 3000)
    })

    useEffect(() => {
        getItem
            .then(res => {
                setItem(res)
                setLoading(false)
            })
    }, [])

    return <>
        {loading ? (<p>'Loading'</p>) :
            (<div className="item-detail" style={{ display: 'flex' }}>
                < ItemDetail item={item} />
                < ItemCount init={3} min={3} max={30} onAdd={addProducts} />
            </div>)}
    </>
}
