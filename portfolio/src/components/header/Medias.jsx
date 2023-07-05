import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "../header/header.css";
const Medias = () => {
  return (
    <div className="medias">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default Medias;
