import React from 'react';
import { useCartContext } from '../../context/CartContext';
import useCounterGlobal from '../../hooks/useCounterGlobal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './checkout.css';

function ItemChekoutCart({ producto }) {
    const { deleteItem, addItem } = useCartContext();
    const { count, increment, decrement } = useCounterGlobal(producto.quantity, producto.stock, 1);

    return (
        <tr>
            <td>
                <img className='imagenPC' src={producto.image} alt="imagen-producto" />
                <span>{producto.name}</span>
            </td>
            <td className='btnRestSumCart'>
                <button className="restar-btn" onClick={async () => {
                    if (count === 1) {
                        return;
                    } else {
                        addItem(producto.id, count - 1);
                        decrement();
                    }

                }}>-</button>
                <span className="cantidad">{count}</span>
                <button className="sumar-btn" onClick={() => {
                    addItem(producto.id, count + 1);
                    increment();
                }}>+</button>
            </td>
            <td>${producto.value * count}</td>
            <td>
                <button onClick={() => deleteItem(producto.id)} className='delete'>
                    <FontAwesomeIcon icon={faTrash} style={{ color: "#FFD43B", fontSize: "20px", padding: "5px" }} />
                </button>
            </td>
        </tr>
    );
}

export default ItemChekoutCart;
