import React, { useState, useEffect } from 'react';
import './Events.css'; 
import EventTemplate from '../Components/EventTemplate';
import { getEventsInOrder } from '../Data/eventsData'; 


function Events() {
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lightbox, setLightbox] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
    });

    useEffect(() => {
        const handleKey = (e) => {
            if (!lightbox) return;
            if (e.key === 'Escape') setLightbox(null);
            if (e.key === 'ArrowRight') setLightbox(l => ({ ...l, currentIndex: Math.min(l.currentIndex + 1, l.images.length - 1) }));
            if (e.key === 'ArrowLeft')  setLightbox(l => ({ ...l, currentIndex: Math.max(l.currentIndex - 1, 0) }));
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightbox]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormStatus(null);
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_key: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
                    ...formData
                })
            });
            if (response.ok) {
                setFormStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    message: ''
                });
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        if (formStatus) setFormStatus(null);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Get all events in order
    const events = getEventsInOrder();
    return (
        <main className="events-container">
            <section className="event-details">
                <div className="row-bar4">
                    <h1>EVENTS WITH <br />PROJECT PLAY</h1>
                    <div className="innertext">
                        <p>If you're looking for the perfect venue to host your next event, <br />we've got you covered. Find us at Project Play!</p>
                    </div>
                    <a href="#event-form-section" className="button-event">
                        CONTACT US
                    </a>
                </div>
            </section>

            {/* Render all events using the template */}
            {events.map((event, index) => (
                <EventTemplate
                    key={event.id}
                    eventNumber={index + 1}
                    title={event.title}
                    description={event.description}
                    additionalInfo={event.additionalInfo}
                    images={event.images}
                    showTitle={event.showTitle}
                    className={event.className}
                    onImageClick={(images, idx) => setLightbox({ images, currentIndex: idx })}
                />
            ))}

            <div className="row-bar6">
                <div className="event-form-section" id="event-form-section">
                    <h1>EVENT INQUIRY</h1>
                    <div className="event-form-container">
                        <h2>Event Inquiry Form</h2>
                        <form onSubmit={handleSubmit} className="event-form">
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Event Type</label>
                                <input
                                    type="text"
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    placeholder="e.g. Tournament, Birthday, Corporate"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Additional Details</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your event..."
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <input
                                type="checkbox"
                                name="botcheck"
                                style={{ display: 'none' }}
                                tabIndex="-1"
                                autoComplete="off"
                            />
                            {formStatus === 'success' && (
                                <div className="form-status form-status--success">
                                    ✓ Message sent! We'll get back to you soon.
                                </div>
                            )}
                            {formStatus === 'error' && (
                                <div className="form-status form-status--error">
                                    ✗ Something went wrong. Please try again.
                                </div>
                            )}
                            <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {lightbox && (
                <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
                    <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={e => { e.stopPropagation(); setLightbox(l => ({ ...l, currentIndex: Math.max(l.currentIndex - 1, 0) })); }}
                        disabled={lightbox.currentIndex === 0}
                    >‹</button>
                    <img
                        className="lightbox-image"
                        src={lightbox.images[lightbox.currentIndex]}
                        alt="Event"
                        onClick={e => e.stopPropagation()}
                    />
                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={e => { e.stopPropagation(); setLightbox(l => ({ ...l, currentIndex: Math.min(l.currentIndex + 1, l.images.length - 1) })); }}
                        disabled={lightbox.currentIndex === lightbox.images.length - 1}
                    >›</button>
                    <span className="lightbox-counter">{lightbox.currentIndex + 1} / {lightbox.images.length}</span>
                </div>
            )}
        </main>
    );
}

export default Events;