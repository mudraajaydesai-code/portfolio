import React, { useState, useEffect } from 'react';
import { ChevronDown, Database, TrendingUp, Brain } from 'lucide-react';

const Hero = ({ data }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['DATA ANALYST', 'BUSINESS INTELLIGENCE', 'ANALYTICS EXPERT', 'PROBLEM SOLVER'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">HELLO, I'M</span>
            </div>
            <h1 className="hero-name">
              <span className="name-part">MUDRA</span>
              <span className="name-part">AJAY</span>
              <span className="name-part">DESAI</span>
            </h1>
            <div className="hero-role">
              <span className="role-label">I'M A</span>
              <span className="role-text">{roles[currentRole]}</span>
            </div>
            <p className="hero-description">
              Results-driven analytics professional with 6+ years of proven leadership 
              experience, specializing in transforming complex datasets into strategic business 
              intelligence that delivers measurable impact and drives organizational growth.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Database className="stat-icon" />
                <div>
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
              <div className="stat">
                <TrendingUp className="stat-icon" />
                <div>
                  <span className="stat-number">3.89</span>
                  <span className="stat-label">Masters GPA</span>
                </div>
              </div>
              <div className="stat">
                <Brain className="stat-icon" />
                <div>
                  <span className="stat-number">15%</span>
                  <span className="stat-label">Performance Boost</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-section">
              <div className="profile-image-container">
                <div className="profile-image-placeholder">
                  <span className="image-text">ADD YOUR PROFESSIONAL PHOTO HERE</span>
                  <p className="image-instruction">
                    Replace this placeholder with your professional headshot
                    <br />
                    Recommended size: 400x400px
                  </p>
                </div>
              </div>
              
              <div className="data-visualization">
                <div className="data-node"></div>
                <div className="data-node"></div>
                <div className="data-node"></div>
                <div className="data-connection"></div>
                <div className="data-connection"></div>
                <div className="data-connection"></div>
              </div>
            </div>
          </div>
        </div>
        
        <button className="scroll-indicator" onClick={scrollToAbout}>
          <ChevronDown size={24} />
          <span>SCROLL TO EXPLORE</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;