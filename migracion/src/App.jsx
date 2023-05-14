import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Foter from './components/Foter';
import ofori from './images/ofori.jpg';
import dos from './images/dos.jpg';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='d-flex justify-content-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ofori} className="d-block w-70" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={dos} className="d-block w-70" alt="..."/>
            </div>
            {/* <div className="carousel-item">
              <img src={require('./images/tres.jpg')} className="d-block w-60" alt="..."/>
            </div> */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Foter/>
    </div>
  );
}

export default App;
