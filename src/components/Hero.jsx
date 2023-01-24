import React from "react";
import "./Hero.css";
import { HashLink as Link } from "react-router-hash-link";


function Hero(props) {

  return (
    <>
      <div className={props.cName}>
        <div className="hero-text" >
          <h1 >{props.title}</h1>
          <h1>{props.title1}</h1>
          <p>{props.text}</p>
          <Link to={props.url} className={props.btnClass}>
            {props.buttonText}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
