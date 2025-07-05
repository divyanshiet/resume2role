import React, { useState } from "react";
import "./Navbar.css";

// Simple SVG icons for menu
const Menu = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor"/><rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor"/></svg>
);
const X = (props) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="navbar-bg">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="navbar-logo-gradient">
              SkillBridge
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            <a href="#">Learn</a>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Support</a>
            <a href="#">Company</a>
            <a href="#">Blog</a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="navbar-auth">
            <button className="navbar-login">Log in</button>
            <button className="navbar-signup">Sign up</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-btn">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="navbar-mobile-icon" />
              ) : (
                <Menu className="navbar-mobile-icon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="navbar-mobile-links">
              <a href="#">Learn</a>
              <a href="#">Product</a>
              <a href="#">Pricing</a>
              <a href="#">Support</a>
              <a href="#">Company</a>
              <a href="#">Blog</a>
              <div className="navbar-mobile-auth">
                <button className="navbar-login">Log in</button>
                <button className="navbar-signup">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;