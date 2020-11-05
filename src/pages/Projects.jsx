import React from "react";
import github from "../components/pictures/github.svg";

export default function Projects() {
  return (
    <div>
      <div className="aboutBg">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectsDiv" id="projects">
          <item className="projectItem">
            <div className="projectTextDiv">
              <h3 className="projectTitle">Title</h3>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, quibusdam, quidem, laborum molestias nisi fugiat
                perspiciatis tenetur quam libero qui neque? Debitis qui alias
                rem iste sapiente cupiditate rerum eligendi.
              </p>
              <div className="projectButtonsDiv">
                <a href="">
                  <button>Demo</button>
                </a>
                <a className="githubLogo" href="https://github.com/frdah">
                  <img src={github} alt="github" />
                </a>
              </div>
            </div>
          </item>
          <item className="projectItem">
            <div className="projectTextDiv">
              <h3 className="projectTitle">Title</h3>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, quibusdam, quidem, laborum molestias nisi fugiat
                perspiciatis tenetur quam libero qui neque? Debitis qui alias
                rem iste sapiente cupiditate rerum eligendi.
              </p>
              <div className="projectButtonsDiv">
                <a href="">
                  <button>Demo</button>
                </a>
                <a className="githubLogo" href="https://github.com/frdah">
                  <img src={github} alt="github" />
                </a>
              </div>
            </div>
          </item>
          <item className="projectItem">
            <div className="projectTextDiv">
              <h3 className="projectTitle">Title</h3>
              <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Minima, quibusdam, quidem, laborum molestias nisi fugiat
                perspiciatis tenetur quam libero qui neque? Debitis qui alias
                rem iste sapiente cupiditate rerum eligendi.
              </p>
              <div className="projectButtonsDiv">
                <a href="">
                  <button>Demo</button>
                </a>
                <a className="githubLogo" href="https://github.com/frdah">
                  <img src={github} alt="github" />
                </a>
              </div>
            </div>
          </item>
        </div>
      </div>
    </div>
  );
}
