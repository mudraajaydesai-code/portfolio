import React, { useState } from 'react';
import { Camera, Plus, X } from 'lucide-react';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Placeholder for user's photos - they can replace these with their actual images
  const photoPlaceholders = [
    {
      id: 1,
      title: "Professional Workspace",
      description: "Add a photo of your workspace or office setup",
      placeholder: true
    },
    {
      id: 2,
      title: "Team Collaboration", 
      description: "Add a photo of you working with your team",
      placeholder: true
    },
    {
      id: 3,
      title: "Conference/Presentation",
      description: "Add a photo of you presenting or at a conference",
      placeholder: true
    },
    {
      id: 4,
      title: "Achievement Moment",
      description: "Add a photo celebrating an achievement or milestone",
      placeholder: true
    }
  ];

  return (
    <section id="photos" className="photo-gallery section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">VISUAL STORY</span>
          <h2 className="section-title">PHOTO GALLERY</h2>
          <p className="section-description">
            Personalize your portfolio with professional photos that showcase your journey
          </p>
        </div>
        
        <div className="gallery-grid">
          {photoPlaceholders.map((photo, index) => (
            <div 
              key={photo.id} 
              className="gallery-item"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(photo)}
            >
              <div className="gallery-placeholder">
                <div className="placeholder-icon">
                  <Camera size={32} />
                </div>
                <div className="placeholder-content">
                  <h4 className="placeholder-title">{photo.title}</h4>
                  <p className="placeholder-description">{photo.description}</p>
                  <div className="add-photo-btn">
                    <Plus size={16} />
                    <span>Add Photo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="photo-instructions">
          <div className="instruction-card">
            <h3>How to Add Your Photos:</h3>
            <ul>
              <li>Replace the placeholder images with your own professional photos</li>
              <li>Recommended image size: 800x600px or 4:3 aspect ratio</li>
              <li>Use high-quality images that represent your professional journey</li>
              <li>Consider adding: workspace photos, team collaborations, presentations, or achievements</li>
            </ul>
          </div>
        </div>
        
        {selectedImage && (
          <div className="photo-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h3>{selectedImage.title}</h3>
                <button 
                  className="modal-close"
                  onClick={() => setSelectedImage(null)}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="modal-body">
                <div className="photo-placeholder-large">
                  <Camera size={64} />
                  <h4>Add Your Photo Here</h4>
                  <p>{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;