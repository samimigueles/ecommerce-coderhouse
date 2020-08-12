import React from 'react'
import cartplus from '../assets/cartplus.svg';

const CartIcon = () => {

    const shop = () =>{
        alert('Thanks for shopping!')
    }

    return (
        <img src={cartplus} alt="logo" style={{ width: 35 }} onClick={shop} />
    )
}

export default CartIcon;