import React from "react";
import CartWidget from '../cart/CartWidget';
import "./navBar.css";
import Logo from '../../assets/logo-dejando-huellas.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <div className="logo">
                        <img className=" imagen-logo " src={Logo} alt="" />
                    </div>
                    <div className="cart d-flex flex-row-reverse">
                        <div className="menu-burger ">
                            <button className="navbar-toggler d-flex justify-content bg-light icon-burger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon text-light bg-light"></span>
                            </button>
                        </div>
                        <CartWidget />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link text-light" aria-current="page" >Inicio</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-light" >Productos</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link text-light" >Contacto</button>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search" />
                            <button className="btn " type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#FFD43B", fontSize: "20px" }} /></button>
                        </form>
                    </div>



                </div>
            </nav>

        </div>

    );
};

export default NavBar;



