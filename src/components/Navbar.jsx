import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
    setIsActive(!isActive);
  };


  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">EAZY</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={openMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isActive ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
