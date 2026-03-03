
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Footer.css';

function Footer() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">

   
        <div className="footer-section">
          <h3 className="footer-name">Sirisha Annapureddy</h3>
          <p className="footer-desc">
            Full Stack Developer | Scalable Full-Stack Web Applications |
            Responsive And User-Friendly Interfaces
          </p>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={scrollTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollTop}>About</Link></li>
            <li><Link to="/projects" onClick={scrollTop}>Projects</Link></li>
            <li><Link to="/contact" onClick={scrollTop}>Contact</Link></li>
          </ul>
        </div>

     
        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <div className="footer-social">

            <a 
              href="https://www.linkedin.com/in/sirisha-annapureddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon linkedin" />
            </a>

            <a 
              href="https://github.com/sirishaannapureddy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="social-icon github" />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Sirisha Annapureddy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
