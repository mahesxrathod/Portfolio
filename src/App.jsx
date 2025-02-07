import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Project from "./components/Project";

function App() {
  return (
    <>
    
      <Router>
      <Header />
      <Home/>
      <About />
      <Project />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
