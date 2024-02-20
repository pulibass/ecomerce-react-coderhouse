import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function ItemListContainer({ mensaje, subMensaje }) {
  const [productos, setProductos] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    fetch("../data/productos.json")
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
    <div className=' mt-2 itemListContainer '>
      <p className='fw-bold h2 text-uppercase text-center '>{mensaje}</p>
      <p className='h2   '>{subMensaje}</p>
      
      <h2 className='tituloItemListContainer mt-5' ><FontAwesomeIcon icon={faBasketShopping} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px" }} />Tú próximo producto esta aquí</h2>
      <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer