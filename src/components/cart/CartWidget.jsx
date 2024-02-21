import React from 'react'
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
function CartWidget() {
    /* const [count, useCount] = useState(0); */
    
    return (
        <div className='contenedor-cart'>
            <button className='button-cart '>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B", fontSize: "20px" }} />
                <p>0</p>
            </button>
        </div>
    )
}

export default CartWidget