import React from 'react'
import './itemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import ItemDetails from '../itemDetails/ItemDetails'

function ItemDetailContainer() {

  const [itemProducto, setItemProducto] = useState([])
  const { productId } = useParams()

  useEffect(() => {
    fetch("../data/productos.json")
      .then(response => response.json())
      .then(productos => {
        const productoId = productos.find(producto => producto.id == productId)
        if (productoId)
          setItemProducto(productoId)
      })
  }, [])
  return (
    <div className='itemDetailContainer mt-2'>
      <h2><FontAwesomeIcon icon={faBagShopping} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px" }} />Seleccionaste el producto: <span>{itemProducto.name}</span></h2>
      <div className='contenedorItemDetail'>
        <ItemDetails itemProductos={itemProducto} />
      </div>
    </div>

  )
}

export default ItemDetailContainer