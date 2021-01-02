import React from "react";
import girlCloud from "../components/images/girlCloudComputer.svg";
import ItemCarousel from "../components/Carousel/ItemCarousel";

export default function Projects() {
  return (
    <div className="section">
      <div className="projectsBg" id="projects">
        <img className="computerGirl" src={girlCloud} alt="girl on cloud" />
        <h1 className="sectionTitle projectsTitle">Projects</h1>
        <div className="projectsDiv">
          <ItemCarousel />
        </div>
      </div>
    </div>
  );
}
