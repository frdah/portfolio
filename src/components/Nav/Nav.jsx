import React, { useState, useEffect } from "react";
import "../../styles/style.css";

export default function Nav() {
  //const ref = React.createRef();
  //const [page, setPage] = useState(false);

  console.log(document.getElementById("about"));

  function handleClick(liId, page) {
    document.getElementById(page).scrollIntoView({
      behavior: "smooth",
    });
    // document.getElementById("aboutLi").classList.remove("activeNavItem");
    // document.getElementById("projectsLi").classList.remove("activeNavItem");
    // document.getElementById("contactLi").classList.remove("activeNavItem");
    // document.getElementById(liId).classList.add("activeNavItem");
  }

  //let bounding = document.getElementById("about").getBoundingClientRect();

  function isInViewport(bounding) {
    if (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return true;
    } else {
      return false;
    }
  }
  window.addEventListener("scroll", function (event) {
    toggleLiClass("aboutLi", "about");
    toggleLiClass("projectsLi", "projects");
    toggleLiClass("contactLi", "contact");
  });

  function toggleLiClass(li, id) {
    let element = document.getElementById(id);
    let liElement = document.getElementById(li);
    if (isInViewport(element.getBoundingClientRect())) {
      liElement.classList.add("activeNavItem");
      console.log("truuu");
    } else {
      console.log("false");
      liElement.classList.remove("activeNavItem");
    }
  }

  return (
    <div className="navBar">
      <ul className="navItemContainer">
        <li
          className="navItem"
          id="aboutLi"
          onClick={() => handleClick("aboutLi", "about")}
        >
          About me
        </li>
        <li
          className="navItem"
          id="projectsLi"
          onClick={() => handleClick("projectsLi", "projects")}
        >
          Projects
        </li>
        <li
          className="navItem"
          id="contactLi"
          onClick={() => handleClick("contactLi", "contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
}
