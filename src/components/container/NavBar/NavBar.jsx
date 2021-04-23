import React from 'react';
import './NavBar.css';
import Carrito from './CartWidget';

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand titulo--menu" href="#">Insumos<span>PC</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse lista--menu" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-3 mt-1">
                    <li className="nav-item active">
                        <a className="nav-link ref-menu" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link ref-menu" href="#">Productos</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link ref-menu" href="#">Nosotros</a>
                    </li>
                </ul>
                <button className="btn btn-outline-light my-2 mx-sm-5" type="submit"><Carrito/></button>
            </div>
        </nav>
    )
}

export default NavBar;