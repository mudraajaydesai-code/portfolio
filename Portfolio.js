import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import PhotoGallery from './PhotoGallery';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import TicTacToe from './TicTacToe';
import { mockData } from '../data/mock';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const [showGame, setShowGame] = useState(false);
  const [data] = useState(mockData);

  useEffect(() => {
    // Add scroll animation effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio">
      <div className="grid-background"></div>
      <Header />
      <main>
        <Hero data={data.personal} />
        <About data={data.about} />
        <PhotoGallery />
        <Skills data={data.skills} />
        <Projects data={data} />
        <Experience data={data} />
        <Certifications data={data} />
        <Contact data={data} onSecretClick={() => setShowGame(true)} />
        {showGame && (
          <TicTacToe onClose={() => setShowGame(false)} />
        )}
      </main>
    </div>
  );
};

export default Portfolio;