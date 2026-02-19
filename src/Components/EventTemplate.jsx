import React from 'react';

// Reusable Event Template Component
const EventTemplate = ({
  title,
  description,
  additionalInfo = null,
  images,
  showTitle = true,
  className = "row-bar5",
  eventNumber,
  onImageClick
}) => {
  // Image Row Component
  const ImageRow = ({ images }) => {
    return (
      <div className="events-image-grid">
        {images.map((src, index) => (
          <div key={index} className="events-image-wrapper" onClick={() => onImageClick?.(images, index)}>
            <img src={src} alt={`${title} ${index + 1}`} className="events-image-item" />
            <div className="events-image-overlay"><span>🔍</span></div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="past-events">
        {showTitle && <h1>PAST EVENTS</h1>}
        <div className="event-header">
          {eventNumber && <span className="event-number-badge">{String(eventNumber).padStart(2, '0')}</span>}
          <h3>{title}</h3>
        </div>
        <div className="innertext">
          <p>{description}</p>
          {additionalInfo && (
            <ul>
              {additionalInfo.map((item, index) => (
                <li key={index}>{item}</li>
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
