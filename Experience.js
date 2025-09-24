import React from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

const Experience = ({ data }) => {
  // Safety check for data
  if (!data || !data.experience || !Array.isArray(data.experience)) {
    return (
      <section id="experience" className="experience section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">MY CAREER PATH</span>
            <h2 className="section-title">WORK EXPERIENCE</h2>
          </div>
          <p>Loading experience...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">MY CAREER PATH</span>
          <h2 className="section-title">WORK EXPERIENCE</h2>
        </div>
        
        <div className="timeline">
          {data.experience.map((job, index) => (
            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-position">{job.position}</h3>
                  <div className="job-meta">
                    <span className="job-company">{job.company}</span>
                    <div className="job-details">
                      <div className="job-detail">
                        <Calendar size={16} />
                        {job.duration}
                      </div>
                      <div className="job-detail">
                        <MapPin size={16} />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="job-achievements">
                  {job.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="achievement">
                      <ChevronRight size={16} className="achievement-icon" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience-summary">
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Team Members Led</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Satisfaction Rating</span>
            </div>
            <div className="stat">
              <span className="stat-number">18%</span>
              <span className="stat-label">Engagement Increase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;