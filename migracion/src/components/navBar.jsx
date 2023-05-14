import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const NavBar = () =>{
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-light sticky-top">
      <div className="container-fluid">
        <Link className="anmpijam navbar-brand" to="/Proyecto_mern"><img src={logo} width="90" alt="Logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="color-nombre-menu nav-link active" aria-current="page" to="/Proyecto_mern">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="color-nombre-menu nav-link active" to="/Products" aria-current="page" >Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="color-nombre-menu nav-link active" to="/Products/Admin" aria-current="page" >Administracion</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="color-nombre-menu nav-link active" aria-current="page" href="#nosotros">Nosotros.</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            <img src={logo} width="200"/>
        </div>
        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4">
            <h1>La Mode Viens</h1>
            <p>Sandra Liliana Solano</p>
            <p>Tienda de ropa</p>
            <p>Ropa para Niños, Niñas, Jovenes y Adultos</p>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 botonp">
          <a href="https://api.whatsapp.com/send?phone=573102794577&text=quisiera%20informacion%20de%20la%20prenda" className="boton uno">
                <span>whatsapp</span>
            </a>
        </div>
      </div>
    </div>
    <section className="container-fluid">
      <div className="row">
        <p id="nosotros" className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 sobrenosotrosp"><span className="lmdvs">La mode viends </span>es una tienda online creada en pandemia para poder hacerle mas facil la compra de distienta ropa a nuestros clientes, por el momento nosotros solo trabajamos con envios contra entrega a nivel de <span className="lmdvs">BOGOTA </span>y resto del pais por envios via efecti, srvientrega, etc</p>
      </div>
    </section>
    </>
  )
}

export default NavBar;