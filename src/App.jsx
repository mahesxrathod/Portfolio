import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router} from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <About />
        <Project />
        <Contact />
      </Router>
    </>
  );
}

export default App;
