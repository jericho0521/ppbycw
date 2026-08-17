import React, { useState } from 'react';
import './FAQ.css';
import { faqs } from '../Data/faqData';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="main-content faq-page">
            <section id="faq">
                <div className="row-bar2">
                    <div className="section-container">
                        <h1 className="section-heading"><b>Frequently Asked Questions</b></h1>
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
