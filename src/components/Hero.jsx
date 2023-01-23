import React from "react";
import "./Hero.css";
import { useNavigate } from 'react-router-dom';
import Contact from "../components/Contact";

function Hero(props) {
  let navigate = useNavigate(); 

  return (
    <>
      <div className={props.cName}>
        <div className="hero-text" >
          <h1 >{props.title}</h1>
          <h1>{props.title1}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
