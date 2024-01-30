import React from 'react';
import './itemContainer.css'
import Envase from '../../assets/envase.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const ItemContainer = () => {
    return (
            <div className='container-fluid  d-flex justify-content-center itemContainer'>
                <div className="card ">
                    <div className="imagen-container">
                        <img className='w-50' src={Envase} alt="" />
                    </div>
                    <div className="detalles-container">
                        <h3>Apitoxina</h3>
                        <p>Apitoxina nivel 5</p>
                        <p className="precio">$15000</p>
                    </div>
                    <button className='btnVerMas'>Ver Más</button>
                </div>
                <div className="card ">
                    <div className="imagen-container">
                        <img className='w-50' src={Envase} alt="" />
                    </div>
                    <div className="detalles-container">
                        <h3>Apitoxina</h3>
                        <p>Apitoxina nivel 4</p>
                        <p className="precio">$13000</p>
                    </div>
                    <button className='btnVerMas'>Ver Más</button>
                </div>
                <div className="card ">
                    <div className="imagen-container">
                        <img className='w-50' src={Envase} alt="" />
                    </div>
                    <div className="detalles-container">
                        <h3>Apitoxina</h3>
                        <p>Apitoxina nivel 3</p>
                        <p className="precio">$10000</p>
                    </div>
                    <button className='btnVerMas'>Ver Más</button>
                </div>
            </div>

    );
};

export default ItemContainer;
