import React from 'react'
import Item from '../item/Item'
import './itemList.css'
function ItemList({ productos }) {

    return (
        <div className='itemList '>
            {productos.map(producto => (<Item key={producto.id} product={producto} />))}
        </div>
    )
}   

export default ItemList