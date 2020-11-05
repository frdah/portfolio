import React from "react";
import image from "./pic.png";
import Abstract_mp4 from "./Abstract.mp4";
import Abstract_webm from "./Abstract.webm";
import Abstract_ogv from "./Abstract.ogv";
import Network from "./Network.mp4";
//import * as image from "pic.png";

export default function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted playsInline>
        <source src={Abstract_mp4} type="video/mp4" />
        {/* <source src={Abstract_webm} type="video/webm" />
        <source src={Abstract_ogv} type="video/ogv" /> */}
      </video>
      <div className="heroTitleDiv">
        <div className="heroTitle">
          <h1>Frida Johansson</h1>
          <h3>Front-end Developer</h3>
        </div>
      </div>
      {/* <img src={image} alt="adwda" /> */}
    </div>
  );
}
