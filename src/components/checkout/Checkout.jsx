import React from 'react'
import './checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Envase from '../../../public/img/envase.png'
import { Link } from 'react-router-dom'
function Checkout() {
  return (
    <div className="main-cart">
      <div className='tituloChekout'>
        <h2><FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px" }} />Finaliza tu compra</h2>
      </div>
      <div class="carrito-container">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img className='imagenPC'
                  src={Envase}
                  alt="imagen"
                />
                <span>Apitoxina</span>
              </td>
              <td>$15000</td>
              <td className='btnRestSumCart'>
                <button class="restar-btn">-</button>
                <span class="cantidad">1</span>
                <button class="sumar-btn">+</button>
              </td>
              <td>$15000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3">Total</td>
              <td id="total">$15000</td>
            </tr>
            <tr>
              <td className='contenedorButtonCompra' colspan="4">
                <Link className='text-decoration-none' to={'/formulario'}>
                  <button class="finalizar-btn">Finalizar Compra</button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

export default Checkout