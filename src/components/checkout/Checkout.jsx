import React from 'react'
import './checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Envase from '../../../public/img/envase.png'
function Checkout() {
  return (
    <div className="main-cart">
      <div className='tituloChekout'>
        <h2><FontAwesomeIcon icon={faCartShopping} style={{ color: "#FFD43B", fontSize: "30px", padding: "5px" }} />Finaliza tu compra</h2>
      </div>
      <div className="carrito">
        <h2>Carrito</h2>
        <div className="titulos">
          <div className="titulo-carrito">
            <p>Producto</p>
          </div>
          <div className="titulo-carrito">
            <p>Precio</p>
          </div>
          <div className="titulo-carrito">
            <p>Sub Total</p>
          </div>
          <div className="titulo-carrito">
            <p>Cantidad</p>
          </div>
        </div>
        <div id="contenedorCarro" className="contenedor-productos">
          {/* <div class="producto-carro">
            <div class="imagen-carro">
              <div div class="imagen-cart">
                <img src="" alt="" />
              </div>
              <div class="title-producto-carro">
                <h2><span></span></h2>
              </div>
            </div>
          </div>
          <div class="precio-carro">
            <div class="price-carro">
              <p>$</p>
            </div>
          </div>
          <div class="precio-carro">
            <div class="price-carro">
              <p>$ </p>
            </div>
          </div>
          <div class="cantidad-carro">
            <div class="button-cantidad">
              <div class="separacion">
                <button type="button" >-</button>
                <div class="btn-number">
                  <p></p>
                </div>
                <button type="button" >+</button>
              </div>
              <div class="btn-delete">
                <button id=""><img src="" alt="" /></button>
              </div>
            </div>
          </div> */}
          <div className="linea">
            <hr />
          </div>
        </div>
        <div className="compra">
          <div className="total">
            <h4 id="compra">Total: $</h4>
          </div>
          <div className="boton-comprar">
            <button id="comprar">comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout