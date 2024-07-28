import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Headerc.css';
import homePath from '../../assets/images/logo.png'; // Replace with your image path
import { Link } from 'react-router-dom';


const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    console.log('Search term:', searchTerm);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="top"></div>
      <section className="navbar">
        <div className="logo">
          <a href="/" rel="noopener noreferrer">
            <img src={homePath} alt="Mental Health Illustration" />
          </a>
        </div>
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="search-button" onClick={handleSearchClick}>Search</button>
        </div>
        <nav className={isMobileMenuOpen ? 'open' : ''}>
          <ul>


          <li>
              <NavLink to="/" className="login-signup-button">
          Home
              </NavLink>
            </li>


            <li>
            <Link to="/login"><button className="add-button">
              +</button></Link>
            </li>
            <li>
              <NavLink to="/login" className="login-signup-button">
                Login/Sign up
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className="menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </button>
      </section>
    </header>
  );
};

export default Header;
