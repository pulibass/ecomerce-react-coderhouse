import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
function ItemListContainer({ mensaje, subMensaje }) {

  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    fetch("/public/productos.json")
      .then(response => response.json())
      .then(producto => {
        if (categoryId) {
          const productosCategory = producto.filter(prodCategory => prodCategory.category == categoryId)
          setProductos(productosCategory)
        } else {
          setProductos(producto)
        }
      })
  }, [categoryId])

  return (
    <div className=' mt-5 itemListContainer '>
      <p className='fw-bold h2 text-uppercase text-center '>{mensaje}</p>
      <p className='h2   '>{subMensaje}</p>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer