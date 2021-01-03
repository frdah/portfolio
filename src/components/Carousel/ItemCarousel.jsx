import React from "react";
import Carousel from "react-elastic-carousel";
import github from "../images/github.svg";
import hemsson from "../images/hemsson.jpg";
import business from "../images/business.jpg";
import portfolio from "../images/portfolio.jpg";
import todo from "../images/todo.jpg";
import SpaceJourney from "../images/SpaceJurney.jpg";
import cart from "../images/cart.jpg";

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
            <a target="_blank" href="../../pages/webshop/Webbshopp_VG">
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
          <img className="projectImg" src={cart} alt="" />
          <h3 className="projectTitle">Shopping cart</h3>
          <p className="description">
            This is a simple shopping cart where you can add items, remove
            items, change quantity and order them.
          </p>
          <span>Javascript</span>
          <span>CSS</span>
          <div className="projectButtonsDiv">
            <a target="_blank" href="https://frdah.github.io/shoppingCart">
              <button>Demo</button>
            </a>
            <a
              target="_blank"
              className="githubLogo"
              href="https://github.com/frdah/shoppingCart"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="projectItem">
        <div className="projectTextDiv">
          <img className="projectImg" src={SpaceJourney} alt="" />

          <h3 className="projectTitle">Space Journey</h3>
          <p className="description">
            A website where focus lies on responsive design and SASS
          </p>
          <span>SASS</span>
          <span>RESPONSIVE</span>
          <div className="projectButtonsDiv">
            <a href="https://frdah.github.io/SpaceJurney/">
              <button>Demo</button>
            </a>
            <a
              className="githubLogo"
              href="https://github.com/frdah/SpaceJurney"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="projectItem">
        <div className="projectTextDiv">
          <img className="projectImg" src={todo} alt="" />
          <h3 className="projectTitle">Todo</h3>
          <p className="description">A simple todo app</p>
          <span>Javascript</span>
          <span>CSS</span>
          <div className="projectButtonsDiv">
            <a target="_blank" href="https://frdah.github.io/todoList">
              <button>Demo</button>
            </a>
            <a
              target="_blank"
              className="githubLogo"
              href="https://github.com/frdah/todoList"
            >
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
