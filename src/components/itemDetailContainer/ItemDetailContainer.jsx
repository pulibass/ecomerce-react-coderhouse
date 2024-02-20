import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './itemDetailContainer.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail/itemDetail'

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
        console.log(productos)
      })
  }, [])
  return (
    <div className='contenedorItemDetail'>
      <ItemDetail itemProductos={itemProducto} />
    </div>

  )
}

export default ItemDetailContainer