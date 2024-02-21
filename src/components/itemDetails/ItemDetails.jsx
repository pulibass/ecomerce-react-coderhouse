import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import Logo from '../../../public/img/logo-completo-dejando-huellas.png';
import Estrella from '../../../public/img/estrella.png';
import { faBullhorn, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './itemDetails.css';

function ItemDetail({ itemProductos }) {
    const [cart, setCart] = useState([]);

    const addToCart = (quantity) => {
        setCart([...cart, { quantity }]);
    };

    return (
        <div className='contenedorDetalles'>
            <div className="imagenDetalles">
                <div className="img">
                    <img src={itemProductos.image} alt="" />
                </div>
            </div>
            <div className="itemsDetalles">
                <div className="logo-precio">
                    <img className='logoItemDetail' src={Logo} alt="" />
                    <div className='precio'>
                        <img className='estrella' src={Estrella} alt="" />
                        <p>${itemProductos.value}</p>
                    </div>
                </div>
                <div className="title-subtitle">
                    <h3>{itemProductos.name}</h3>
                    <p>{itemProductos.itemDetails}</p>
                    <div className='nivel'>
                        <FontAwesomeIcon icon={faSyringe} style={{ color: "#FFD43B", fontSize: "30px" }} />
                        <h5>{itemProductos.details}</h5>
                    </div>
                </div>
                <div className='stock'>
                    <FontAwesomeIcon icon={faBullhorn} style={{ color: "#FFD43B", fontSize: "30px" }} />
                    <p>{itemProductos.stock}</p>
                </div>
                <ItemCount stock={itemProductos.stock} onAddToCart={addToCart} />
            </div>
        </div>
    );
}

export default ItemDetail;
