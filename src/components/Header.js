import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {

  const location = useLocation();
  const path = location.pathname;

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/services", label: "SERVICES" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/contact", label: "CONTACT" }
  ];

  return (
    <header className="header">

      <Link to="/" className="header-logo" onClick={scrollTop}>
        My Portfolio
      </Link>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`header-link ${
              path === to || path.startsWith(to + "/") ? "active" : ""
            }`}
            onClick={scrollTop}
          >
            {label}
          </Link>
        ))}
      </nav>

    </header>
  );
}

export default Header;