import React from "react";

import About from "../components/About";
import Service from "../components/Service";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { Routes, Route } from "react-router-dom";

function Main() {
  return (
    <main>
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
    </main>
  );
}

export default Main;
