import React from 'react'
import './itemCount.css'
import { useState, useEffect } from 'react'
function ItemCount() {

    const [counterButton, setCounterButton] = useState(1);

    const increment = () => {
        setCounterButton(counterButton + 1)
    }
    const decrement = () => {
        if (counterButton > 1)
            setCounterButton(counterButton - 1)
    }

    const addToCart = () => {
        console.log("agregado al carro")
    }
    return (

        <div className='itemCountContainer'>
            <div className='buttonsAD'>
                <button className='buttonD' onClick={decrement}>-</button>
                <span className='fw-bold m-5 countP'>{counterButton}</span>
                <button className='buttonI ' onClick={increment}>+</button>
            </div>
            <button className='addToCart ' onClick={addToCart}>
                añadir al carro
            </button>
        </div>
    )
}

export default ItemCount