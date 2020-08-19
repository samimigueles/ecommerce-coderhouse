import React from 'react';
import Items from '../components/items/Items';
import ItemCount from '../components/counter/ItemCount';



function Home() {

    function addProducts() {
        alert(` products were added`);
      }

    return (
        <div style={{ alignItems: 'center', alignContent: 'center', textAlign: 'center', alignSelf: 'center' }}>
            <div>
                <header>
                </header>
                < Items />
                < ItemCount init={0} min={1} max={10} onAdd={addProducts} />
            </div>
        </div>
    )
}

export default Home;