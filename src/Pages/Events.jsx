import React, { useState } from 'react';
import PastEvents from '../Components/PastEvents/PastEvents';
import './Events.css';

function Events() {
    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
    });

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

            <PastEvents />

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
        </main>
    );
}

export default Events;
