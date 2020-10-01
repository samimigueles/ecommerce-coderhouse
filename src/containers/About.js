import React from 'react'
import dice from '../components/assets/dice.svg'

export default function About() {


    return (
        <div>
            <img src={dice} alt="dice"style={{width: 250}} />
            <h3>RollTech is a digital place to found your next step in technology.</h3>
            <p>If you looking for enterprise a new adventure in your tech way, this is the correct place to found it.</p>
        </div>
    )
}
