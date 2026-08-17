import React, { useRef, useState } from 'react';
import styles from './EventInquiry.module.css';
import { submitEventInquiry } from './submitEventInquiry';

const EMPTY_INQUIRY = {
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
};

const FIELDS = [
    { name: 'name', label: 'Your Name', placeholder: 'Your Name', type: 'text' },
    { name: 'email', label: 'Email Address', placeholder: 'Your Email', type: 'email' },
    { name: 'phone', label: 'Phone Number', placeholder: 'Phone Number', type: 'tel' },
    {
        name: 'eventType',
        label: 'Event Type',
        placeholder: 'e.g. Tournament, Birthday, Corporate',
        type: 'text'
    }
];

function EventInquiry() {
    const [inquiry, setInquiry] = useState(EMPTY_INQUIRY);
    const [status, setStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submissionInProgress = useRef(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setStatus(null);
        setInquiry((currentInquiry) => ({
            ...currentInquiry,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (submissionInProgress.current) return;

        submissionInProgress.current = true;
        setIsSubmitting(true);
        setStatus(null);

        try {
            await submitEventInquiry(inquiry);
            setInquiry(EMPTY_INQUIRY);
            setStatus('success');
        } catch {
            setStatus('error');
        } finally {
            submissionInProgress.current = false;
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.rowBar}>
            <section className={styles.eventFormSection} id="event-form-section">
                <h1>EVENT INQUIRY</h1>
                <div className={styles.eventFormContainer}>
                    <h2>Event Inquiry Form</h2>
                    <form aria-label="Event inquiry form" className={styles.eventForm} onSubmit={handleSubmit}>
                        {FIELDS.map((field) => (
                            <div className={styles.formGroup} key={field.name}>
                                <label className={styles.formLabel} htmlFor={`event-inquiry-${field.name}`}>
                                    {field.label}
                                </label>
                                <input
                                    id={`event-inquiry-${field.name}`}
                                    name={field.name}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    required
                                    type={field.type}
                                    value={inquiry[field.name]}
                                />
                            </div>
                        ))}
                        <div className={styles.formGroup}>
                            <label className={styles.formLabel} htmlFor="event-inquiry-message">
                                Additional Details
                            </label>
                            <textarea
                                id="event-inquiry-message"
                                name="message"
                                onChange={handleChange}
                                placeholder="Tell us more about your event..."
                                required
                                rows="4"
                                value={inquiry.message}
                            />
                        </div>
                        {status === 'success' && (
                            <div className={`${styles.formStatus} ${styles.formStatusSuccess}`}>
                                ✓ Message sent! We'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className={`${styles.formStatus} ${styles.formStatusError}`}>
                                ✗ Something went wrong. Please try again.
                            </div>
                        )}
                        <button className={styles.submitButton} disabled={isSubmitting} type="submit">
                            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default EventInquiry;
