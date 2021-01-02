import React, { useState } from "react";
import { ReactComponent as Moon } from "../images/navMoon.svg";

export default function MobileNav({ handleClick }) {
  const [showNav, setShowNav] = useState(false);

  function handleClickMenu() {
    showNav ? setShowNav(false) : setShowNav(true);
  }

  function handleNavClick(id, page) {
    setShowNav(false);
  }

  return (
    <div>
      <Moon className="mobileMenu" onClick={handleClickMenu} />
      {showNav && (
        <div className="mobileNav">
          <ul className="navItemContainer">
            <div className="mobileNavLights"></div>

            <li
              className="navItem"
              id="heroLi"
              onClick={() => setShowNav(false)}
            >
              <a href="#hero">Home</a>
            </li>

            <li
              className="navItem"
              id="aboutLi"
              onClick={() => setShowNav(false)}
            >
              <a href="#about">About me</a>
            </li>

            <li
              className="navItem"
              id="projectsLi"
              onClick={() => setShowNav(false)}
            >
              <a href="#projects">Projects</a>
            </li>

            <li
              className="navItem"
              id="contactLi"
              onClick={() => setShowNav(false)}
            >
              <a href="#contact">Contact</a>
            </li>
            <div className="mobileNavLights"></div>
          </ul>
        </div>
      )}
    </div>
  );
}
