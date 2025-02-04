import React, { useState } from 'react';
import './Events.css'; 
import { mc1, mc2, mc3, mc4, mc5, mc6 } from '../Images'; 

// Image Row Component
const ImageRow = ({ images }) => {
    return (
        <div className="events-image-grid">
            {images.map((src, index) => (
                <div key={index} className="events-image-wrapper">
                    <img src={src} alt={`Event ${index + 1}`} className="events-image-item" />
                </div>
            ))}
        </div>
    );
};

function Events() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '46db8645-b415-4df3-98dc-0c7800213199',
                    ...formData
                })
            });
            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    eventType: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const images = [mc1, mc2, mc3, mc4, mc5, mc6];
    return (
        <div className="events-container">
            <div className="event-details" style={{marginTop: '-100px'}}>
                <div className="row-bar4">
                    <h1>EVENTS WITH <br />PROJECT PLAY</h1>
                    <div className="innertext">
                        <p>If you're looking for the perfect venue to host your next event, <br />we've got you covered. Find us at Project Play!</p>
                    </div>
                    <a href="https://wa.me/601116281524" target="_blank" rel="noopener noreferrer" className="button-event">
                        CONTACT US
                    </a>
                </div>
            </div>

            <div className="row-bar5">
                <div className="past-events">
                    <h1>PAST EVENTS</h1>
                    <h3>Monash Cup 2024</h3>
                    <div className="innertext">
                        <p>
                            Highlights: Monash University hosted their Monash Cup 2024 at Project Play. <br />Monash Cup was held for 3 days and had teams competing in different games including:
                            <ul>
                                <br />Counter Strike 2
                                <br />Valorant
                                <br />League of Legends
                            </ul>
                        </p>
                    </div>
                    <ImageRow images={images} />
                </div>
            </div>

            <div className="row-bar6">
                <div className="event-form-section">
                    <h1>EVENT INQUIRY</h1>
                    <div className="event-form-container">
                        <h2>Event Inquiry Form</h2>
                        <form onSubmit={handleSubmit} className="event-form">
                            <div className="form-group">
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
                                <input
                                    type="text"
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    placeholder="Event Type"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Additional Details"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;