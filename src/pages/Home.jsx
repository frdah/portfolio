import React from "react";
import moon from "../components/images/moon.svg";
import { ReactComponent as Balloon } from "../components/images/balloon.svg";

export default function Hero() {
  return (
    <div className="section">
      <div id="hero" className="hero">
        <div className="starsDiv"></div>
        <div className="starsDiv starsDiv2"></div>

        <div className="heroTitle">
          <img src={moon} alt="moon" className="moon" />
          <h1>Frida Johansson</h1>
          <h3>Front-end Developer</h3>
        </div>
        <Balloon className="balloonHero" />
      </div>
    </div>
  );
}
