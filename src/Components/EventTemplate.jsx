import React from 'react';

// Reusable Event Template Component
const EventTemplate = ({ 
  title, 
  description, 
  additionalInfo = null,
  images, 
  showTitle = true,
  className = "row-bar5" 
}) => {
  // Image Row Component
  const ImageRow = ({ images }) => {
    return (
      <div className="events-image-grid">
        {images.map((src, index) => (
          <div key={index} className="events-image-wrapper">
            <img src={src} alt={`${title} ${index + 1}`} className="events-image-item" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="past-events">
        {showTitle && <h1>PAST EVENTS</h1>}
        <h3>{title}</h3>
        <div className="innertext">
          <p>{description}</p>
          {additionalInfo && (
            <ul>
              {additionalInfo.map((item, index) => (
                <React.Fragment key={index}>
                  <br />{item}
                </React.Fragment>
              ))}
            </ul>
          )}
        </div>
        <ImageRow images={images} />
      </div>
    </div>
  );
};

export default EventTemplate;
