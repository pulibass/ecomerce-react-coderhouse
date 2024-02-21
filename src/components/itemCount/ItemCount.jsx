import React, { useState } from 'react';
import './itemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function ItemCount({ stock, onAddToCart }) {
    const [counterButton, setCounterButton] = useState(1);

    const increment = () => {
        if (counterButton < stock) {
            setCounterButton(counterButton + 1);
        }
    };

    const decrement = () => {
        if (counterButton > 1) {
            setCounterButton(counterButton - 1);
        }
    };

    const addToCart = () => {
        onAddToCart(counterButton);
    };

    return (
        <div className='itemCountContainer'>
            <div className='buttonsAD'>
                <button className='buttonD' onClick={decrement}>-</button>
                <p className='fw-bold m-5 countP'>{counterButton}</p>
                <button className='buttonI' onClick={increment}>+</button>
            </div>
            <div className='buttonAddToCart'>
                <button className='addToCart' onClick={addToCart}>
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFF", fontSize: "15px", paddingRight: "5px" }} />
                    añadir al carro
                </button>
            </div>
        </div>
    );
}

export default ItemCount;
