import React from 'react';
import './Events.css'; 
import { mc1, mc2, mc3, mc4, mc5, mc6 } from '../Images'; // Make sure these images are correctly imported

// Image Row Component
const ImageRow = () => {
    return (
        <div className="image-row">
            <img src={mc1} alt="monash1" className="image-item" />
            <img src={mc2} alt="monash2" className="image-item" />
            <img src={mc3} alt="monash3" className="image-item" />
            <img src={mc4} alt="monash4" className="image-item" />
            <img src={mc5} alt="monash5" className="image-item" />
            <img src={mc6} alt="monash6" className="image-item" />
        </div>
    );
};

function Events() {
    return (
        <div className="events-container">
            <div className="event-details">
                <div className='row-bar4'>
                <h1>EVENTS WITH PROJECT PLAY</h1>
                <p>If you're looking for the perfect venue to host your next event, we’ve got you covered. Find us at Project Play!</p>
                <a href="https://wa.me/601116281524" target="_blank" rel="noopener noreferrer" className="button-event">
                    CONTACT US
                </a>
            </div>
            </div>

            <div className="past-events">
                <h1>PAST EVENTS</h1>
                <h3>Monash Cup 2024</h3>
                
                <p>Highlights: Monash University hosted their Monash Cup 2024 at Project Play. Monash Cup was held for 3 days and had teams competing in 3 different games:
                <ul>
                    <li>Counter Strike 2</li>
                    <li>Valorant</li>
                    <li>League of Legends</li>
                </ul>
                </p>
                

                {/* Image Row Component */}
                <ImageRow />
            </div>
        </div>
    );
}

export default Events;
