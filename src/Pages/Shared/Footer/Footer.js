import React from "react";
import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer">
      <hr />
      <footer>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/fahad.fahim09"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/fahad09fahim"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/09_fahim/"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="copyright">Sports Flash © {year}</p>
      </footer>
    </div>
  );
};

export default Footer;
