import React from 'react'
import ItemList from '../itemList/ItemList'
import { useState, useEffect } from 'react'
import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { getProducts } from '../../../public/data/firebase'
function ItemListContainer({ mensaje, subMensaje }) {
  const [productos, setProductos] = useState([])
  const [bclass, setBclass] = useState(false)
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then(productos => {
        if (categoryId) {
          const productosCategory = productos.filter(prodCategory => prodCategory.category == categoryId)
          setProductos(productosCategory)
          setBclass(true);
        } else {
          setProductos(productos)
          setBclass(false);
        }
      })
      .catch(error => console.log(error))
  }, [categoryId])

  return (
    <div className={`itemListContainer ${bclass ? 'con-background' : ''}`}>

      <p className='fw-bold h2 text-uppercase text-center '>{mensaje}</p>
      <p className='h2   '>{subMensaje}</p>

      <h2 className='tituloItemListContainer mt-5' ><FontAwesomeIcon icon={faBasketShopping} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px", textShadow: "2px 3px 2px rgba(0, 0, 0, 0.6)" }} />Tú próximo producto esta aquí</h2>
      <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer


