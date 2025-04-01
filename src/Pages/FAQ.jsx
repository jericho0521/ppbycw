import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What racing simulator equipment do you have?",
            answer: "We feature the Logitech G29 racing wheel and pedal set for an immersive racing experience. Our setup includes a professional racing seat and high-quality display for the ultimate racing experience.",
            icon: "fa-solid fa-car-rear"
        },
        {
            question: "Where is Project Play By CW located?",
            answer: "We are located in Bandar Sunway, Subang Jaya, Malaysia. Our gaming hub is easily accessible and offers ample parking space for our customers.",
            icon: "fa-solid fa-location-dot"
        },
        {
            question: "What gaming services do you offer?",
            answer: "We offer three main services: Racing Simulators, High-Performance PC Gaming, and PlayStation 5 gaming. Each service is equipped with top-tier hardware and the latest games.",
            icon: "fa-solid fa-gamepad"
        },
        {
            question: "What are your operating hours?",
            answer: "We are open daily from 12:00 PM to 2:00 AM. During peak hours and weekends, we recommend making a reservation to ensure availability.",
            icon: "fa-regular fa-clock"
        },
        {
            question: "Do you offer membership benefits?",
            answer: "Yes! Our members enjoy exclusive rates, special packages, and bonus credits on reloads. Members get RM6/HR for PC Gaming and RM12/HR for Racing Simulator, compared to regular rates of RM8/HR and RM15/HR respectively.",
            icon: "fa-solid fa-crown"
        },
        {
            question: "What PS5 games are available?",
            answer: "We offer a variety of popular PS5 games including FC 25, UFC 5, Overcooked, NBA 2K24, and Tekken 8. Our game library is regularly updated with new releases.",
            icon: "fa-solid fa-dice"
        },
        {
            question: "Can I host events at Project Play?",
            answer: "Yes! We welcome gaming events, tournaments, and group bookings. We've successfully hosted events like the Monash Cup 2024, featuring games like Counter Strike 2, Valorant, and League of Legends.",
            icon: "fa-solid fa-trophy"
        },
        {
            question: "What are your PC specifications?",
            answer: "Our gaming PCs are equipped with AMD Ryzen 5 5500, MSI GeForce RTX 3070, 16GB DDR4 3200MHz RAM, and 27\" 165Hz Gaming Monitors for the ultimate gaming experience.",
            icon: "fa-solid fa-desktop"
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="main-content">
            <section id="faq">
                <div className="row-bar2">
                    <div className="section-container">
                        <h1><b>Frequently Asked Questions</b></h1>
                        <div className="content-category">
                            <div className="content-details">
                                <p>Find answers to common questions about our gaming services</p>
                            </div>
                        </div>

                        <div className="content-category">
                            <div className="content-details faq-content">
                                {faqs.map((faq, index) => (
                                    <div 
                                        key={index} 
                                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <div className="faq-question">
                                            <span className="faq-icon">
                                                <i className={faq.icon}></i>
                                            </span>
                                            <h3>{faq.question}</h3>
                                            <span className="arrow-icon">
                                                <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                                            </span>
                                        </div>
                                        <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ; 