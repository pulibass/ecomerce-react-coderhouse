import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
function Item({ product }) {

    return (
        <>
            <div className='itemContainer'>
                <div className="card">
                    <div className="imagen-container">
                        <img className='w-50' src={product.image} alt="" />
                    </div>
                    <div className="detalles-container">
                        <h3>{product.name}</h3>
                        <h6 className='w-100 detalles'>{product.details}</h6>
                        <p className="precio">${product.value}</p>
                    </div>
                    <Link to={`/product/${product.id}`}>
                        <button className='btnVerMas'>Ver Más</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Item