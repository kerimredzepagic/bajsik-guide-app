import React, { useEffect, useState } from 'react';
import './cart.css';

const Cart = (props) => {
    return(
        <div className = "cart">
            <div className = "cart-name">{props.name}</div>
            <div className = "cart-power">{props.value}</div>
            <div className = "cart-shop">{props.link}</div>
        </div>
    );
};

export default Cart;
