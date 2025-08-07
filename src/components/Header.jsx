import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header 
      className="header" 
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <nav className="nav container">
        <div className="nav-logo">
          <h2>CourseCreator360</h2>
        </div>
        <div className="nav-links">
          <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
            Features
          </a>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>
            Pricing
          </a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>
            Reviews
          </a>
          <a 
            href="#cta" 
            className="nav-cta"
            onClick={(e) => { e.preventDefault(); scrollToSection('cta'); }}
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;