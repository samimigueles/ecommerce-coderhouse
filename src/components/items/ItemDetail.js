import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../counter/ItemCount'


const getItem = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                { id: '1', name: 'transistor', price: 50, description: 'Electronic component', view: 'https://cdmxelectronica.com/wp-content/uploads/AR0258-Transistor-BC547B.jpg' },
                { id: '2', name: 'potentiometer', price: 65, description: 'Electronic component', view: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Potentiometer.jpg' },
                { id: '3', name: 'resistor', price: 45, description: 'Electronic component', view: 'https://www.diyelectronics.co.za/store/10512-thickbox_default/resistor-220-ohm-14w-5.jpg' }].find(i => i.id === id))
        }, 2000)
    })
}

const ItemDetail = () => {
    const onAdd = () => {
        alert('products added');
    }

    const { id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        getItem(id).then(res => {
            console.log(res)
            setItem(res);
            console.log(item);
        })
        return () => console.log('dismount');
    }, [id]);


    return <>
        <div className='card-body'>
            {item && <p> {item.name}</p>}
            {item && <img src={item.view} style={{ width: 250 }}></img>}
            {item && <p> {item.description}</p>}
            {item && <p>price: ${item.price}</p>}
            < ItemCount init={3} min={3} max={45} onAdd={onAdd} />

        </div>
    </>
}

export default ItemDetail;
