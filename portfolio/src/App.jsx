import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about/About";
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";

const App = () => {
  return (
    <>
    <Router>
      <Header />
      <NavBar/>
      <About/>
    </Router>
    </>
  );
};

export default App;
