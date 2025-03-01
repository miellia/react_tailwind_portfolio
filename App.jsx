import React from "react";
import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const App = () => {
  return (
    <HashRouter>
      <div className="bg-gray-900 text-white min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
