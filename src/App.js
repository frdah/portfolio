import React from "react";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="main">
      <Nav />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
