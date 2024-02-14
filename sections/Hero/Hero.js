import React from "react";
import './Hero.css'
const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <p>Welcome To Cyborg</p>
        <h1>
        BROWSE OUR POPULAR <br></br><strong>GAMES HERE</strong>
        </h1>
        <button type="button" className="btn btn-success btn-rounded p-3 mt-3" data-mdb-ripple-init>browse now</button>
      </div>
    </>
  );
};

export default Hero;
