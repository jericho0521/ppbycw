import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>About Project Play</h1>
                <p>Your Premier Gaming Destination in Sunway</p>
            </section>

            <section className="about-mission">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <p>
                        At Project Play, we're dedicated to creating an immersive gaming environment 
                        that brings together passionate gamers from all walks of life. Our goal is 
                        to provide top-tier gaming experiences with cutting-edge equipment and 
                        exceptional service.
                    </p>
                </div>
            </section>

            <section className="about-features">
                <h2>What Sets Us Apart</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <i className="fa-solid fa-trophy"></i>
                        <h3>Premium Equipment</h3>
                        <p>State-of-the-art gaming PCs, racing simulators, and PS5 consoles</p>
                    </div>
                    <div className="feature-card">
                        <i className="fa-solid fa-users"></i>
                        <h3>Community Focus</h3>
                        <p>Regular events, tournaments, and a vibrant gaming community</p>
                    </div>
                    <div className="feature-card">
                        <i className="fa-solid fa-location-dot"></i>
                        <h3>Prime Location</h3>
                        <p>Conveniently located in Sunway with easy access to public transport</p>
                    </div>
                    <div className="feature-card">
                        <i className="fa-solid fa-clock"></i>
                        <h3>Extended Hours</h3>
                        <p>Open daily from 12 PM to 2 AM for your gaming needs</p>
                    </div>
                </div>
            </section>

            <section className="about-story">
                <div className="story-content">
                    <h2>Our Story</h2>
                    <p>
                        Founded with a passion for gaming, Project Play by CW emerged from a vision 
                        to create more than just another gaming center. We wanted to build a space 
                        where gamers could experience the latest technology, connect with fellow 
                        enthusiasts, and immerse themselves in their favorite games.
                    </p>
                    <p>
                        Today, we're proud to be Sunway's premier gaming destination, hosting 
                        everything from casual gaming sessions to major tournaments like the 
                        Monash Cup 2024. Our commitment to excellence shows in every aspect 
                        of our facility, from our carefully selected equipment to our 
                        dedicated staff.
                    </p>
                </div>
            </section>

            <section className="about-values">
                <h2>Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <i className="fa-solid fa-star"></i>
                        <h3>Excellence</h3>
                        <p>Providing top-quality gaming experiences</p>
                    </div>
                    <div className="value-card">
                        <i className="fa-solid fa-handshake"></i>
                        <h3>Community</h3>
                        <p>Building lasting connections through gaming</p>
                    </div>
                    <div className="value-card">
                        <i className="fa-solid fa-heart"></i>
                        <h3>Passion</h3>
                        <p>Driven by our love for gaming</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About; 