import React from "react";
import "./About.css";
import pic from "../assets/pic3.jpg";
import pic1 from "../assets/pic4.jpg";
import pic2 from "../assets/pic5.webp";
import pic3 from "../assets/pic6.png";
import AboutData from "./AboutData";
function About() {
  return (
    <div className="container" id="about">
      <h1>About Us</h1>
      <p>There is no one who loves pain itself,</p>

      <AboutData
        cName="first-des"
        heading="Enterprise Resource Planning System, a software which made a significant impact in the life of Indian Manufacturers"
        text= "A system which was ideally designed to track the activities has travelled leaps and miles from being a mere tracking system to a virtual member that monitors, tracks and guides the users in order to streamline and maintain the operational efficiency of the business."
        img={pic}
        img1={pic1}

      />

      <AboutData
        cName="first-des-reverse"
        heading="Ever Since 2001, the market has been penetrated with hundreds of ERP players, everyone stating themselves as the best."
        text="As we digged down more and more we realized that most of the small & mid size companies still resisting to move towards IT due to multiple reason such as budget constraints, hassle of using 2 different softwares, Security issues, to name a few. 
        That is how Eazy came into picture with a vision of standing out from Rest with its unique preposition and simultaneously catering the key challenges of SME Manufacturers thereby making their lives Easy!"
        img={pic2}
        img1={pic3}
      />
    </div>
  );
}

export default About;
