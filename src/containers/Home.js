import React from 'react';
import NavBar from '../components/navbar/NavBar';
import ItemCount from '../components/counter/ItemCount';



function Home() {
    function addProducts() {
        alert(` products were added`);
    }
    return (
        <div>
            < NavBar />
            <h1>Hi there! Welcome to RollTech</h1><br />
            <header>
            < ItemCount init={0} min={1} max={10} onAdd={addProducts} />
            </header>
            
        </div>
    )
}

export default Home;