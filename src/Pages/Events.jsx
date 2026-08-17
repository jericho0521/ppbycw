import React from 'react';
import EventInquiry from '../Components/EventInquiry/EventInquiry';
import PastEvents from '../Components/PastEvents/PastEvents';
import styles from './Events.module.css';

function Events() {
    return (
        <main className={styles.eventsContainer}>
            <section className={styles.eventDetails}>
                <div className={styles.intro}>
                    <h1>Gaming Events at <br />Project Play By CW</h1>
                    <div className={styles.innerText}>
                        <p>Host your next tournament, birthday, corporate event, or group gaming session with us in Bandar Sunway.</p>
                    </div>
                    <a className={styles.contactButton} href="#event-form-section">
                        Contact Us
                    </a>
                </div>
            </section>

            <PastEvents />
            <EventInquiry />
        </main>
    );
}

export default Events;
