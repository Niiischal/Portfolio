import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Medias = () => {
  return (
    <div className="medias">
      <a href="https://linkedin.com" target="_blank" style={{color: 'var(--color-primary)'}}>
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" style={{color: 'var(--color-primary)'}}>
        <BsGithub />
      </a>
      <a href="https://facebook.com" target="_blank" style={{color: 'var(--color-primary)'}}>
        <BsFacebook />
      </a>
    </div>
  );
};

export default Medias;
