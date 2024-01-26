import React from 'react'
import './cart.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
function CartWidget() {
    const [count, useCount] = useState(0);
    return (
        <div className='contenedor-cart'>
            <button className='button-cart' onClick={()=> useCount(count + 1)}><FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B",fontSize:"30px" }} />{count}</button>
        </div>
    )
}

export default CartWidget