import React from 'react';
import { Award, ExternalLink, Calendar, Star } from 'lucide-react';

const Certifications = ({ data }) => {
  // Safety check for data
  if (!data || !data.certifications || !Array.isArray(data.certifications)) {
    return (
      <section id="certifications" className="certifications section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">CREDENTIALS</span>
            <h2 className="section-title">CERTIFICATIONS</h2>
          </div>
          <p>Loading certifications...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">CREDENTIALS</span>
          <h2 className="section-title">CERTIFICATIONS</h2>
        </div>
        
        <div className="certifications-grid">
          {data.certifications.map((cert, index) => (
            <div key={index} className="cert-card" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="cert-header">
                <div className="cert-icon">
                  <Award size={24} />
                </div>
                <div className="cert-badge">
                  <Star size={16} />
                </div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                
                <div className="cert-date">
                  <Calendar size={16} />
                  {cert.date}
                </div>
                
                <div className="cert-skills">
                  {cert.skills.map(skill => (
                    <span key={skill} className="cert-skill">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="cert-footer">
                <button className="cert-link">
                  VIEW CREDENTIAL
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-section">
          <h3 className="education-title">EDUCATION</h3>
          <div className="education-grid">
            {data.education.map((edu, index) => (
              <div key={index} className="education-card">
                <h4 className="edu-degree">{edu.degree}</h4>
                <p className="edu-school">{edu.school}</p>
                <div className="edu-details">
                  <span className="edu-location">{edu.location}</span>
                  <span className="edu-gpa">GPA: {edu.gpa}</span>
                  <span className="edu-graduation">{edu.graduation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;