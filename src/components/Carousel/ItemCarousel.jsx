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
          <div className="spanDiv">
            <span>REACT</span>
            <span>SASS</span>
            <span>RESPONSIVE</span>
            <span>FIGMA</span>
            <span>ADOBE ILLUSTRATOR</span>
          </div>
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
            and view your order as well as check the status of that order. You
            can view and update orders in the adminpanel at /webshop/adminpanel
          </p>
          <div className="spanDiv">
            <span>PHP</span>
            <span>SASS</span>
            <span>RESPONSIVE</span>
            <span>MySQL</span>
            <span>Scrum</span>
          </div>
          <div className="projectButtonsDiv">
            <a target="_blank" href="http://fridajohansson.codes/webshop/">
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
          <div className="spanDiv">
            <span>REACT</span>
            <span>STYLED COMPONENTS</span>
          </div>
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
          <div className="spanDiv">
            <span>Javascript</span>
            <span>CSS</span>
          </div>
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
          <div className="spanDiv">
            <span>SASS</span>
            <span>RESPONSIVE</span>
          </div>
          <div className="projectButtonsDiv">
            <a target="_blank" href="https://frdah.github.io/SpaceJurney/">
              <button>Demo</button>
            </a>
            <a
              target="_blank"
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
          <div className="spanDiv">
            <span>Javascript</span>
            <span>CSS</span>
          </div>
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
