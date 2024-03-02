import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import { faBullhorn, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './itemDetails.css';
import { useCartContext } from '../../context/CartContext';

function ItemDetail({ itemProductos }) {
    const { addItemProduct } = useCartContext();

    const addToCart = () => {
        addItemProduct(itemProductos, 1); // You might want to adjust the quantity here
        console.log('Producto añadido al carro:', itemProductos);
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
                    <img className='logoItemDetail' src="https://firebasestorage.googleapis.com/v0/b/ecomerce-react-coderhouse.appspot.com/o/logo-completo-dejando-huellas.png?alt=media&token=6edd6f18-2a5c-4308-abd9-30ae52f839e2" alt="Logo" />
                    <div className='precio'>
                        <img className='estrella' src="https://firebasestorage.googleapis.com/v0/b/ecomerce-react-coderhouse.appspot.com/o/estrella.png?alt=media&token=f4d73ca8-1441-423b-baa9-385e8f6f575e" alt="estrella-icon" />
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
                <ItemCount stock={itemProductos.stock} itemProductos={itemProductos} />
            </div>
        </div>
    );
}

export default ItemDetail;
