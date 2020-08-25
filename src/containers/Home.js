import React from 'react';
import Items from '../components/items/Items';
import ItemCount from '../components/counter/ItemCount';
import ItemContainer from '../components/items/ItemContainer';



function Home() {

    function addProducts() {
        alert(` products were added`);
    }

    return (
        <div style={{ alignItems: 'center', alignContent: 'center', textAlign: 'center' }}>

            <header style={{display: 'flex'}}>
                {/* < Items /> */}
                {/* < ItemCount init={0} min={1} max={10} onAdd={addProducts} /> */}
                < ItemContainer />
            </header>

        </div>
    )
}

export default Home;