import React from 'react';
import './Events.css'; 
import { mc1, mc2, mc3, mc4, mc5, mc6 } from '../Images'; 

// Image Row Component
const ImageRow = ({ images }) => {
    return (
        <div className="image-grid">
            {images.map((src, index) => (
                <div key={index} className="image-wrapper">
                    <img src={src} alt={`Event ${index + 1}`} className="image-item-event" />
                </div>
            ))}
        </div>
    );
};


function Events() {
    const images = [mc1, mc2, mc3, mc4, mc5, mc6];
    return (
        <div className="events-container">
            <div className="event-details">
                <div className="row-bar4">
                    <h1>EVENTS WITH PROJECT PLAY</h1>
                    <div class="innertext">
                    <p>If you're looking for the perfect venue to host your next event, we’ve got you covered. Find us at Project Play!</p>
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
                    <div class="innertext">
                    <p>
                        Highlights: Monash University hosted their Monash Cup 2024 at Project Play. Monash Cup was held for 3 days and had teams competing in different games including:
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
        </div>
    );
}

export default Events;