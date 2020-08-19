import React, { useEffect, useState} from 'react';
import ItemList from "./ItemList";



function Items() {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Hola');
        ItemList().then(res => {
            setItems(res); 
            setLoading(false);
        });
    }, []);

    return <>
        {loading && <p>Loading...</p>}
        <ul>
            {items.map((p) => <li key={p.id}>{p.name}</li>)}
        </ul>
    </>;

}

export default Items