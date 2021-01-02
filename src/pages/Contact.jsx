import React from "react";
import linkedin from "../components/images/linkedin.png";
import github from "../components/images/github.svg";

export default function Contact() {
  return (
    <div className="section">
      <div className="contactBg" id="contact">
        <div className="contactDiv">
          <h1 className="sectionTitle">Contact me</h1>

          <a href="mailto:frida.johansson888@gmail.com">
            frida.johansson888@gmail.com
          </a>
          <div className="divider"></div>
          <div>
            <a href="https://www.linkedin.com/in/frida-johansson-887558192/">
              <img
                src={linkedin}
                alt=""
                style={{ width: "50px", marginRight: "20px" }}
              />
            </a>
            <a href="https://www.github.com/frdah/">
              <img src={github} alt="" style={{ width: "50px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
