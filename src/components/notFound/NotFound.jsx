import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='containerNotFound'>
      <div className='img-404'>
        <img src="https://firebasestorage.googleapis.com/v0/b/ecomerce-react-coderhouse.appspot.com/o/abeja-404.png?alt=media&token=7409445f-3379-42c8-b1d9-bd710ee7e3c0" alt="img-404" />
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