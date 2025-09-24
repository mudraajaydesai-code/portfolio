import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Github } from 'lucide-react';

const Contact = ({ data, onSecretClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [clickCount, setClickCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thanks for reaching out! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleLogoClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 5) {
      onSecretClick();
      setClickCount(0);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">LET'S WORK TOGETHER</h2>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <h3>Ready to transform data into insights?</h3>
              <p>
                I'm always excited to discuss new opportunities in data analytics, 
                business intelligence, and strategic decision-making. Let's connect 
                and explore how we can create meaningful impact together.
              </p>
            </div>
            
            <div className="contact-methods">
              <a href={`mailto:${data.contact.email}`} className="contact-method">
                <Mail size={20} />
                <span>{data.contact.email}</span>
              </a>
              
              <a href={`tel:${data.contact.phone}`} className="contact-method">
                <Phone size={20} />
                <span>{data.contact.phone}</span>
              </a>
              
              <a 
                href={`https://linkedin.com/in/${data.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              
              <div className="contact-method">
                <MapPin size={20} />
                <span>{data.contact.location}</span>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">
              SEND MESSAGE
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div 
              className="footer-logo"
              onClick={handleLogoClick}
              style={{ cursor: 'pointer' }}
            >
              <span className="logo-text">MD</span>
              <span className="logo-subtitle">DATA ANALYST</span>
            </div>
            
            <div className="footer-text">
              <p>© 2025 Mudra Ajay Desai. Transforming data into actionable insights.</p>
            </div>
            
            <div className="footer-links">
              <a href={`mailto:${data.contact.email}`}>
                <Mail size={20} />
              </a>
              <a href={`https://linkedin.com/in/${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {clickCount > 0 && clickCount < 5 && (
            <div className="secret-hint">
              <span>🎯 {5 - clickCount} more clicks to unlock something special...</span>
            </div>
          )}
        </div>
      </footer>
    </section>
  );
};

export default Contact;