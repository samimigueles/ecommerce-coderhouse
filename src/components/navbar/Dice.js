import React from 'react'
import dice from '../assets/dice.svg'

function Dice() {

    const greetings = () => {
        alert(`You lucky RollTech number is ${Math.random()}`);
    }

    return (
        <img src={dice} alt="logo" style={{ width: 35 }} onClick={greetings} />

    )
}

export default Dice;