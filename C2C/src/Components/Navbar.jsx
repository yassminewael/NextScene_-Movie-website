import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setIsMobileMenuOpen(false);
    }
  }

  function toggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-left">
          <button className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Movie Explorer</span>
          </Link>
        </div>

        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Movies</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/favorites" onClick={() => setIsMobileMenuOpen(false)}>Favorites</Link>
          <Link to="#" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>

        <div className="nav-right">
          <form className="search-bar" onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <Link to="/Signup" className="sign-in-btn">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
