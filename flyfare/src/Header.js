import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import homePath from './assets/images/logo.png'; // Replace with your image path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 17) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="top"></div>
      <section className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="logo">
          <a href="/" rel="noopener noreferrer">
            <img src={homePath} alt="Mental Health Illustration" />
          </a>         
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <NavLink exact to="/" activeClassName="active-nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-nav-link">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/space" activeClassName="active-nav-link">
                Space
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="active-nav-link">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-nav-link">
                Contact us
              </NavLink>
            </li>
            <li>
              <a href="/" className="sos">SOS</a>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active-nav-link">
                Login/Sign up
              </NavLink>
            </li>
          
          
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
