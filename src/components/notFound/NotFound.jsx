import React from 'react'
import './notFound.css'
import Abeja404 from '../../../public/img/abeja-404.png'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='containerNotFound'>
      <div className='img-404'>
        <img src={Abeja404} alt="" />
      </div>
      <div className='items404-button'>
        <div className='items404'>
          <h2>404</h2>
          <h4>¡Algo salio mal!</h4>
          <h6>Lo sentimos, no se pudo encontrar la página que solicitó. Por favor regrese a la página de inicio.</h6>
        </div>
        <div className="button404">
        <Link className='link404' to={'/'}>
            <button>volver a inicio</button>
        </Link>
        </div>
      </div>
    </div>

  )
}

export default NotFound