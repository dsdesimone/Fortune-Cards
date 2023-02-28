import React from "react";
import "./Footer.css";

const Footer = ({ phraseRamdom }) => {
  return (
    <>
      <div className="global__container">
        <p className="footer__container">{phraseRamdom.author}</p>
      </div>
    </>
  );
};

export default Footer;
 