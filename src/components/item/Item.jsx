import React from 'react'
import './item.css'
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
                    <button className='btnVerMas'>Ver Más</button>
                </div>
            </div>
        </>
    )
}

export default Item