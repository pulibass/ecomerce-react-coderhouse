import React, { useState } from 'react';
import './itemCount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';


function ItemCount({ stock, itemProductos }) {
    const { addItemProduct } = useCartContext()
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
        if (itemProductos.stock === 0) {
            Swal.fire({
                icon: "warning",
                title: "Atención",
                text: "Producto sin stock",
                showConfirmButton: true,
            })
        } else {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "PRODUCTO AÑADIDO AL CARRO",
                html: `<p><b>${itemProductos.name}</b></p>`,
                showConfirmButton: true,
            });
            addItemProduct(itemProductos, counterButton);
        }
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
