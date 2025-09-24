import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Database, BarChart, Brain } from 'lucide-react';

const Projects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 1: return <BarChart size={24} />;
      case 2: return <Database size={24} />;
      case 3: return <Brain size={24} />;
      default: return <Database size={24} />;
    }
  };

  // Safety check for data
  if (!data || !data.projects || !Array.isArray(data.projects)) {
    return (
      <section id="projects" className="projects section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">WHAT I'VE BUILT</span>
            <h2 className="section-title">FEATURED PROJECTS</h2>
          </div>
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHAT I'VE BUILT</span>
          <h2 className="section-title">FEATURED PROJECTS</h2>
        </div>
        
        <div className="projects-grid">
          {data.projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="project-header">
                <div className="project-icon">
                  {getProjectIcon(project.id)}
                </div>
                <div className="project-meta">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-info">
                    <span className="project-org">{project.organization}</span>
                    <span className="project-duration">{project.duration}</span>
                  </div>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-metrics">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="metric">
                    <span className="metric-value">{value}</span>
                    <span className="metric-label">{key.replace('_', ' ')}</span>
                  </div>
                ))}
              </div>
              
              <div className="project-tech">
                {project.technologies.slice(0, 4).map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-more">+{project.technologies.length - 4}</span>
                )}
              </div>
              
              <button 
                className="project-details-btn"
                onClick={() => setSelectedProject(project)}
              >
                VIEW DETAILS
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-body">
                <div className="modal-section">
                  <h4>PROJECT OBJECTIVES</h4>
                  <ul>
                    {selectedProject.objectives.map((obj, index) => (
                      <li key={index}>{obj}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h4>KEY INSIGHTS</h4>
                  <ul>
                    {selectedProject.insights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-section">
                  <h4>TECHNOLOGIES USED</h4>
                  <div className="modal-tech-grid">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;