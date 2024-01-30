import React from 'react'
import './itemListContainer.css'
function ItemListContainer({mensaje, subMensaje}) {
  return (
    <div className='d-flex justify-content-center mt-5 itemListContainer p-5'>
      <p className='fw-bold h2 text-uppercase text-center w-100'>{mensaje} <span>{subMensaje}</span></p>
    </div>
  )
}

export default ItemListContainer