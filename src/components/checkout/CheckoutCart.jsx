import React from 'react'
import './checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import ItemChekoutCart from './ItemChekoutCart'


function CheckoutCart() {
  const { cart, total, cartDelete } = useCartContext();
  return (
    <div className="main-cart">
      <div className='tituloChekout'>
        <h2><FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px" }} />Finaliza tu compra</h2>
        <Link className='btnAtrasCheckout' to={'/'}>
          <button className='btn  fw-bold buttonAtrasCheckout'>Volver a Productos</button>
        </Link>
      </div>
      <div class="carrito-container">
        <table>
          <thead>
            <tr>
              <th>PRODUCTO</th>
              <th>CANTIDAD</th>
              <th>SUB TOTAL</th>
              <th>ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.length === 0 ?
                <tr>
                  <td>
                    <span>...(Carrito Vacio)</span> agrega productos a tu carro
                  </td>

                </tr>

                :
                (
                  cart.map((producto) => (
                    <ItemChekoutCart key={producto.id} producto={producto} />
                  ))
                )

            }
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">TOTAL</td>
              <td id="total">${total()}</td>
            </tr>
            <tr>
              <td className='contenedorButtonCompra' >
                {
                  cart.length === 0 ?
                    <Link className='text-decoration-none' >
                      <button className="finalizar-btn">Finalizar Compra</button>
                    </Link>
                    :
                    <Link className='text-decoration-none' to={'/formulario'}>
                      <button className="finalizar-btn">Finalizar Compra</button>
                    </Link>
                }
              </td>
              <td>
                <button onClick={cartDelete} className="vaciarCarro-btn">Vaciar Carro</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default CheckoutCart