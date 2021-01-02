import React from "react";
import Carousel from "react-elastic-carousel";
import github from "../images/github.svg";
import hemsson from "../images/hemsson.jpg";
import business from "../images/business.jpg";
import portfolio from "../images/portfolio.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function ItemCarousel() {
  return (
    <Carousel className="carousel" breakPoints={breakPoints} pagination={false}>
      <div className="projectItem">
        <div className="projectTextDiv">
          <img className="projectImg" src={portfolio} alt="" />

          <h3 className="projectTitle">Portfolio</h3>
          <p className="description">
            This portfolio was made by designing and creating a lot of svg files
          </p>
          <span>REACT</span>
          <span>SASS</span>
          <span>RESPONSIVE</span>
          <span>FIGMA</span>
          <span>ADOBE ILLUSTRATOR</span>
          <div className="projectButtonsDiv">
            <a target="_blank" href="">
              <button>Demo</button>
            </a>
            <a
              target="_blank"
              className="githubLogo"
              href="https://github.com/frdah/portfolio"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="projectItem">
        <div className="projectTextDiv">
          <img className="projectImg" src={hemsson} alt="" />
          <h3 className="projectTitle">Hemsson (shop)</h3>
          <p className="description">
            Hemsson is a school group project where you can order as a customer
            and view your order as well as check the status of that order. If
            you go to /admin you can also update orders.
          </p>
          <span>PHP</span>
          <span>SASS</span>
          <span>RESPONSIVE</span>
          <div className="projectButtonsDiv">
            <a target="_blank" href="">
              <button>Demo</button>
            </a>
            <a
              target="_blank"
              className="githubLogo"
              href="https://github.com/frdah/frontendprojekt_webbshop"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="projectItem">
        <div className="projectTextDiv">
          <img className="projectImg" src={business} alt="" />
          <h3 className="projectTitle">Business</h3>
          <p className="description">
            This project is an adminpanel for a smaller business where the user
            may create an account, login, view create and delete customers and
            view them in a list or their details.
          </p>
          <span>REACT</span>
          <span>STYLED COMPONENTS</span>

          <div className="projectButtonsDiv">
            <a target="_blank" href="https://frdah.github.io/buisness-js3">
              <button>Demo</button>
            </a>
            <a
              className="githubLogo"
              target="_blank"
              href="https://github.com/frdah/buisness-js3"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="projectItem">
        <div className="projectTextDiv">
          <h3 className="projectTitle">sdf</h3>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam, quidem, laborum molestias nisi fugiat perspiciatis
            tenetur quam libero qui neque? Debitis qui alias rem iste sapiente
            cupiditate rerum eligendi.
          </p>
          <div className="projectButtonsDiv">
            <a target="_blank" href="">
              <button>Demo</button>
            </a>
            <a
              target="_blank"
              className="githubLogo"
              href="https://github.com/frdah"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="projectItem">
        <div className="projectTextDiv">
          <h3 className="projectTitle">Title</h3>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            quibusdam, quidem, laborum molestias nisi fugiat perspiciatis
            tenetur quam libero qui neque? Debitis qui alias rem iste sapiente
            cupiditate rerum eligendi.
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
      </div>
    </Carousel>
  );
}
