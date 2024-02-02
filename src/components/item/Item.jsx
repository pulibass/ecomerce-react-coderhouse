import React from 'react'
import './item.css'
import { useState, useEffect } from 'react'

function Item() {

    const [products, setProducts] = useState(0)
    useEffect(() => {
        fetch("../itemList/ItemList.jsx")
            .then(response => response.json())
            .then((datos) => {
                const productsAdd =
                    <div className='container-fluid  d-flex justify-content-center itemContainer'>
                        <div className="card ">
                            <div className="imagen-container">
                                <img className='w-50' src={datos.productos.image} alt="" />
                            </div>
                            <div className="detalles-container">
                                <h3>{datos.productos.title}</h3>
                                <p>{datos.productos.details}</p>
                                <p className="precio">${datos.productos.value}</p>
                            </div>
                            <button className='btnVerMas'>Ver Más</button>
                        </div>
                    </div>
                setProducts(productsAdd)
            })
    }, [])
    return (
        <>
            {products}
        </>
    )
}

export default Item