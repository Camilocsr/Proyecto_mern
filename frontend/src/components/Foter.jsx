import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'wowjs/css/libs/animate.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

const Foter = () => {

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  
  return (
    <>
      <footer className="container-fluid">
        <div className="row">
          <div className="wow animate__animated animate__pulse col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4 anmpijam">
            <img src={require('../images/logo.png')} alt="logo de la pagina" width="200" />
          </div>
          <div className="wow animate__animated animate__pulse col-12 col-sm-4 col-lg-4 col-xl-4 col-xxl-4 anmpijam">
            <h1>La Mode Viens</h1>
            <p>Sandra Liliana Solano</p>
            <p>Tienda de ropa</p>
            <p>Ropa para Niños, Niñas, Jovenes y Adultos</p>
          </div>
          <div className="wow animate__animated animate__pulse col-4 anmpijam">
            <h2>Redes sociales</h2>
            <div className="redes-soc">
              <Link to="https://api.whatsapp.com/send?phone=573102794577&text=quisiera%20informacion%20de%20la%20prenda..."><i className="fab fa-whatsapp"></i></Link>
              <Link to="https://www.facebook.com/La-mode-viens-117535656712769"><i className="fab fa-facebook"></i></Link>
              <Link to="https://www.facebook.com/messages/t/117535656712769"><i className="fab fa-facebook-messenger"></i></Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Foter;