import React from "react";
import "./AboutData.css";
import pic from "../assets/pic3.jpg"
import pic1 from "../assets/pic4.jpg"

function AboutData(props) {
  return (
    <div className={props.cName}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>
          {props.text}
        </p>
      </div>

      <div className="image">
        <img alt="img" src={props.img} />
        <img alt="img" src={props.img1} />
      </div>
    </div>
  );
}

export default AboutData;
