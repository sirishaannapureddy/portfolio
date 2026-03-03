import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const path = location.pathname;

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/services', label: 'SERVICES' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <header className="header">
      <Link to="/" className="header-logo" onClick={scrollTop}>My Portfolio</Link>
      <nav className="header-nav">
        {navLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`header-link ${(to === '/' ? path === '/' : path.startsWith(to)) ? 'active' : ''}`}
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
