//import React from "react";

import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import bann from './assetes/Bannet.jpg'
import bann1 from './assetes/Bannet1.jpg'
import affiche1 from "./assetes/affiche33.jpg"
import affiche2 from "./assetes/affiche333.jpg"
import affiche3 from "./assetes/affiche3333.jpg"
import "./styling.css"
import "./Style/Slide.css"

// import {ServelCategory} from "./servelCategory"
const MainSlider = () => {
  return (
    // <div className="LLLLLLLL">

    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="Txt">
        <div className='TheText'>
          {/* Uno marcket the best deal for your cleaner product. */}

        </div>
        <div className="Find">
          {/* <div className="LABEL"></div> */}
        {/* <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Search For a Product"/> */}
        {/* <button type="button" class="btn btn-primary">Search</button> */}
        </div>
        </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={affiche3} className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src={affiche2} className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src={affiche1} className="d-block w-100" alt="Slide 3" />
        </div>  
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
     
    </div>
    
  );
};

export default MainSlider;
