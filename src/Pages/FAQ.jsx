import React from 'react';
import './FAQ.css';

function FAQ() {
    const faqs = [
        {
            question: "What racing simulator equipment do you have?",
            answer: "We feature the Logitech G29 racing wheel and pedal set for an immersive racing experience. Our setup includes a professional racing seat and high-quality display for the ultimate racing experience."
        },
        {
            question: "Where is Project Play By CW located?",
            answer: "We are located in Sunway, Subang Jaya, Malaysia. Our gaming hub is easily accessible and offers ample parking space for our customers."
        },
        {
            question: "What gaming services do you offer?",
            answer: "We offer three main services: Racing Simulators, High-Performance PC Gaming, and PlayStation 5 gaming. Each service is equipped with top-tier hardware and the latest games."
        },
        {
            question: "What are your operating hours?",
            answer: "We are open daily from 10:00 AM to 10:00 PM. During peak hours and weekends, we recommend making a reservation to ensure availability."
        },
        {
            question: "Do you offer membership benefits?",
            answer: "Yes! Our members enjoy exclusive rates, special packages, and bonus credits on reloads. Members get RM6/HR for PC Gaming and RM12/HR for Racing Simulator, compared to regular rates of RM8/HR and RM15/HR respectively."
        },
        {
            question: "What PS5 games are available?",
            answer: "We offer a variety of popular PS5 games including FC 25, UFC 5, Overcooked, NBA 2K24, and Tekken 8. Our game library is regularly updated with new releases."
        },
        {
            question: "Can I host events at Project Play?",
            answer: "Yes! We welcome gaming events, tournaments, and group bookings. We've successfully hosted events like the Monash Cup 2024, featuring games like Counter Strike 2, Valorant, and League of Legends."
        },
        {
            question: "What are your PC specifications?",
            answer: "Our gaming PCs are equipped with AMD Ryzen 5 5500, MSI GeForce RTX 3070, 16GB DDR4 3200MHz RAM, and 27\" 165Hz Gaming Monitors for the ultimate gaming experience."
        }
    ];

    return (
        <div className="faq-container">
            <div className="faq-header">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about our gaming services</p>
            </div>
            
            <div className="faq-content">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question">
                            <h3>{faq.question}</h3>
                        </div>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ; 