import React from "react";

import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Footer from "../components/Footer"
import Main from "./Main";


function Home() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              cName="hero"
              title="Eazy ERP 4.0"
              title1="On 28 February"
              text="Bridge towards Simpler Operations!"
              buttonText="Get Regester"
              url="/"
              btnClass="btn"
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default Home;
