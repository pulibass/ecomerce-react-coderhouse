import React from 'react'
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext';
function CartWidget() {
    const { cart } = useCartContext();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <div className='contenedor-cart'>
            <button className='button-cart '>
                <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B", fontSize: "20px" }} />
                <p>{totalItems}</p>
            </button>
        </div>
    )
}

export default CartWidget