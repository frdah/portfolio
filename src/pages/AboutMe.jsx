import React from "react";
import { ReactComponent as Balloon } from "../components/images/balloon.svg";
import frida from "../components/images/fridacropped.jpg";
export default function AboutMe() {
  return (
    <div className="aboutDiv section">
      <div className="starsDiv"></div>
      <div className="aboutBg" id="about">
        <div className="aboutTextDiv">
          <img src={frida} alt="frida" className="aboutImg" />

          <p>
            Hi there! I’m Frida, a front end developer student located in
            Stockholm. I will be finished with my studies at Nackademins
            Yrkeshögskola at the end of May, 2021. I am Currently searching for
            an unpaid internship starting in march since this is part of my
            education. I'm most comfortable working in React although I am very
            open to learning new frameworks.
          </p>
          <p>
            I am a very good team player although I am also very effective
            working by myself. I am a person who gets really invested in the
            projects I’m working on and find it very exciting to learn new ways
            to be a better coder. During my previous internship course, I worked
            on an admin panel for a startup company with a couple other
            students. This project was done using React and Redux and we learned
            to use formik, yup and react hook forms and Material UI among other
            things. I find that I learned a lot during this period and hopefully
            I'll learn just as much during the next one.
          </p>
        </div>
      </div>
      <div className="balloonDiv">
        <Balloon className="balloonAbout" />
      </div>
    </div>
  );
}
