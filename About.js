import React from 'react';
import { User, Target, TrendingUp, Users } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHO I AM</span>
          <h2 className="section-title">MY JOURNEY</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="journey-text">
              {data.journey.split('\n\n').map((paragraph, index) => (
                <p key={index} className="journey-paragraph">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
          
          <div className="about-highlights">
            <h3 className="highlights-title">KEY HIGHLIGHTS</h3>
            <div className="highlights-grid">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    {index === 0 && <User size={20} />}
                    {index === 1 && <Users size={20} />}
                    {index === 2 && <TrendingUp size={20} />}
                    {index === 3 && <Target size={20} />}
                  </div>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="personal-growth-section">
          <h3 className="growth-title">{data.personalGrowth.title}</h3>
          <div className="growth-experiences">
            {data.personalGrowth.experiences.map((exp, index) => (
              <div key={index} className="growth-card">
                <div className="growth-header">
                  <h4 className="growth-card-title">{exp.title}</h4>
                  <span className="growth-company">{exp.company}</span>
                </div>
                <p className="growth-description">{exp.description}</p>
                <div className="growth-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="growth-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="growth-impact">
            <h4 className="impact-title">The Impact on My Professional Identity</h4>
            <p className="impact-text">{data.personalGrowth.impact}</p>
          </div>
        </div>

        <div className="about-quote">
          <blockquote>
            "Transforming complex data into actionable insights that drive business growth 
            and create meaningful impact."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;