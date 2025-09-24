import React, { useState } from 'react';
import { Code, Database, BarChart3, Brain, Users, Target } from 'lucide-react';

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState('technical');

  const SkillBar = ({ skill, delay = 0 }) => (
    <div className="skill-item" style={{ animationDelay: `${delay}ms` }}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-fill" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      {skill.category && (
        <span className="skill-category">{skill.category}</span>
      )}
    </div>
  );

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHAT I KNOW</span>
          <h2 className="section-title">SKILLS & EXPERTISE</h2>
        </div>
        
        <div className="skills-tabs">
          <button 
            className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            <Code size={20} />
            TECHNICAL
          </button>
          <button 
            className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`}
            onClick={() => setActiveTab('business')}
          >
            <Users size={20} />
            BUSINESS
          </button>
        </div>
        
        <div className="skills-content">
          {activeTab === 'technical' && (
            <div className="skills-grid">
              <div className="skills-column">
                <h3 className="skills-subtitle">
                  <Database size={24} />
                  PROGRAMMING & ANALYSIS
                </h3>
                <div className="skills-list">
                  {data.technical.slice(0, 4).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div className="skills-column">
                <h3 className="skills-subtitle">
                  <BarChart3 size={24} />
                  VISUALIZATION & ML
                </h3>
                <div className="skills-list">
                  {data.technical.slice(4).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={(index + 4) * 100} />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'business' && (
            <div className="skills-grid">
              <div className="skills-column">
                <h3 className="skills-subtitle">
                  <Target size={24} />
                  LEADERSHIP & STRATEGY
                </h3>
                <div className="skills-list">
                  {data.business.slice(0, 3).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                  ))}
                </div>
              </div>
              
              <div className="skills-column">
                <h3 className="skills-subtitle">
                  <Brain size={24} />
                  OPERATIONAL EXCELLENCE
                </h3>
                <div className="skills-list">
                  {data.business.slice(3).map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} delay={(index + 3) * 100} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="frameworks-section">
          <h3 className="frameworks-title">FRAMEWORKS & TOOLS</h3>
          <div className="frameworks-grid">
            {data.frameworks.map((framework, index) => (
              <div key={framework} className="framework-tag" style={{ animationDelay: `${index * 50}ms` }}>
                {framework}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;