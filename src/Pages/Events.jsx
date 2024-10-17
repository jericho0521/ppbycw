import React from 'react';
import Slider from "react-slick";
import './Events.css'; 
import '../Assets/Font.css';
import '../Assets/row.css';
import '../Assets/arrow.css';
import './About.css';
import './Home.css'; 
import { mc1, mc2, mc3, mc4, mc5, mc6 } from '../Images'; // Ensure these images are properly exported
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; // Import slick styles

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow next-arrow" onClick={onClick}>
            <i className="arrow-icon">→</i> {/* Right arrow icon */}
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow prev-arrow" onClick={onClick}>
            <i className="arrow-icon">←</i> {/* Left arrow icon */}
        </div>
    );
};

// Image Carousel Component
const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="image-wrapper">
                    <img src={mc1} alt="Image 1" />
                </div>
                <div className="image-wrapper">
                    <img src={mc2} alt="Image 2" />
                </div>
                <div className="image-wrapper">
                    <img src={mc3} alt="Image 3" />
                </div>
                <div className="image-wrapper">
                    <img src={mc4} alt="Image 4" />
                </div>
                <div className="image-wrapper">
                    <img src={mc5} alt="Image 5" />
                </div>
                <div className="image-wrapper">
                    <img src={mc6} alt="Image 6" />
                </div>
            </Slider>
        </div>
    );
};

function Events() {
    return (
        <div className="row-bar3">
            {/* Main Event Container */}
            <div className="event-container"> 
                <div className='innertext'>
                    <h1 className="event-heading">EVENTS WITH PROJECT PLAY</h1> 
                </div>
                <div className="event-content"> 
                    <div className='innertext'>
                        <p>If you're looking for the perfect venue to host your next event, we’ve got you covered. Find us at Project Play!</p>
                    </div>
                </div>
                <a href="https://wa.me/601116281524" target="_blank" rel="noopener noreferrer" className="button-event">
                    <h4 className="montserrat-bold">CONTACT US</h4>
                </a>
            </div>

            {/* Past Events Section */}
            <div className="row-bar-full">
                <div className="event-container">
                    <h1><b>PAST EVENTS</b></h1>
                    <div className="event-content">
                        <h2>Monash Cup 2024</h2>
                        <div className='innertext'>
                            <p>Highlights: Monash University hosted their Monash Cup 2024 at Project Play, 
                            <br />where over 40 participants competed in an exciting Esports Tournament featuring top games like Valorant, Counter-Strike 2, League of Legends, and FC24.</p>
                        </div>
                    </div>
                </div>

                {/* Add ImageCarousel here */}
                <ImageCarousel />
            </div>
        </div>
    );
}

export default Events;
