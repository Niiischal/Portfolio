import React from "react";
import profile from "../../assets/nischal-removebg.png";
import Buttons from "./Buttons";
import Medias from "./Medias";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nischal Khatiwada</h1>
        <h1 className="text-light">Frontend Developer.</h1>
        <Buttons />
        <Medias />
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
        <a href="/" className="scrollBelow">
          Scroll Below
        </a>
      </div>
    </header>
  );
};

export default Header;
