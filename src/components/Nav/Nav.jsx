import React from "react";
import "../../styles/style.css";
import MobileNav from "./MobileNav";

export default function Nav() {
  function handleClick(page) {
    document.getElementById(page).scrollIntoView({
      behavior: "smooth",
    });
  }

  function isInViewport(bounding) {
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  window.addEventListener("scroll", function (event) {
    toggleLiClass("aboutLi", "about");
    toggleLiClass("projectsLi", "projects");
    toggleLiClass("contactLi", "contact");
    toggleLiClass("heroLi", "hero");
  });

  function toggleLiClass(li, id) {
    let element = document.getElementById(id);
    let liElement = document.getElementById(li);
    if (isInViewport(element.getBoundingClientRect())) {
      console.log("in view port" + { liElement });
      liElement.classList.add("activeNavItem");
      element.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      console.log("Not view port" + liElement);

      liElement.classList.remove("activeNavItem");
    }
  }

  return (
    <div className="navContainer">
      <div className="navBar">
        <ul className="navItemContainer">
          <li className="navItem" id="heroLi">
            <a href="#hero">Home</a>
          </li>
          <li className="navItem" id="aboutLi">
            <a href="#about">About me</a>
          </li>
          <li className="navItem" id="projectsLi">
            <a href="#projects">Projects</a>
          </li>
          <li className="navItem" id="contactLi">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navLights"></div>
      </div>

      {/*MOBILE NAV*/}
      <MobileNav handleClick={handleClick} />
    </div>
  );
}
