import React, { useEffect, useState } from 'react';
import ItemList from "./ItemList";



function Items() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ItemList().then(res => {
            setItems(res);
            setLoading(false);
        });
    }, []);

    return <>
        {loading && <p>Loading...</p>}
        <ul style={{display:'grid'}}>
            {items.map((p) => <li key={p.id}><img src={p.view} alt="product" style={{width:200, border:'solid black'}}></img>{`Detail: ${p.name}, stock:${p.stock}`}</li>)}
        </ul>
    </>;

}

export default Items