import React from 'react'
import ItemCount from '../itemCount/ItemCount'
import './itemDetailContainer.css'
import Apitoxina from '../../../public/img/envase.png'
import Logo from '../../../public/img/logo-completo-dejando-huellas.png'
import Estrella from '../../../public/img/estrella.png'
import { faBullhorn, faSyringe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ItemDetailContainer() {
  return (
    <div className='contenedorDetalles'>
      <div className="imagenDetalles">
        <div className="img">
          <img src={Apitoxina} alt="" />
        </div>
      </div>
      <div className="itemsDetalles">
        <div className="logo-precio">
          <img className='logoItemDetail' src={Logo} alt="" />
          <div className='precio'>
            <img className='estrella' src={Estrella} alt="" />
            <p>$15000</p>
          </div>
        </div>
        <div className="title-subtitle">
          <h3>Apitoxina</h3>
          <p>Apitoxina pura y natural: nuestro producto ofrece los beneficios terapéuticos de la picadura de abeja, conocida por sus propiedades antiinflamatorias y analgésicas. Perfecto para aliviar dolores musculares y articulares. ¡Experimenta el poder curativo de la naturaleza con nuestra apitoxina de calidad premium!</p>
          <div className='nivel'>
            <FontAwesomeIcon icon={faSyringe} style={{ color: "#FFD43B", fontSize: "30px" }} />
            <h5>Apitoxina nivel 5</h5>
          </div>
        </div>


        <div className='stock'>
          <FontAwesomeIcon icon={faBullhorn} style={{ color: "#FFD43B", fontSize: "30px" }} />
          <p>stock: 20</p>
        </div>
        <ItemCount />

      </div>
    </div>

  )
}

export default ItemDetailContainer