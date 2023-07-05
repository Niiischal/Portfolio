import React from "react";
import cv from "../../assets/CV.pdf";
import "../header/header.css";

const Buttons = () => {
  return (
    <div className="buttons">
      <a href={cv} download={cv} className="btn">
        Download CV
      </a>
      <a href="/" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default Buttons;
