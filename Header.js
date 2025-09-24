import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">MD</span>
            <span className="logo-subtitle">DATA ANALYST</span>
          </div>
          
          <nav className="desktop-nav">
            <button onClick={() => scrollToSection('about')}>ABOUT</button>
            <button onClick={() => scrollToSection('photos')}>PHOTOS</button>
            <button onClick={() => scrollToSection('skills')}>SKILLS</button>
            <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
            <button onClick={() => scrollToSection('experience')}>EXPERIENCE</button>
            <button onClick={() => scrollToSection('contact')}>CONTACT</button>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection('about')}>ABOUT</button>
            <button onClick={() => scrollToSection('photos')}>PHOTOS</button>
            <button onClick={() => scrollToSection('skills')}>SKILLS</button>
            <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
            <button onClick={() => scrollToSection('experience')}>EXPERIENCE</button>
            <button onClick={() => scrollToSection('contact')}>CONTACT</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;