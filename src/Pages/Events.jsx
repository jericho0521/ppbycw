import React from 'react';
import EventInquiry from '../Components/EventInquiry/EventInquiry';
import PastEvents from '../Components/PastEvents/PastEvents';
import styles from './Events.module.css';

function Events() {
    return (
        <main className={styles.eventsContainer}>
            <section className={styles.eventDetails}>
                <div className={styles.intro}>
                    <h1>EVENTS WITH <br />PROJECT PLAY</h1>
                    <div className={styles.innerText}>
                        <p>If you're looking for the perfect venue to host your next event, <br />we've got you covered. Find us at Project Play!</p>
                    </div>
                    <a className={styles.contactButton} href="#event-form-section">
                        CONTACT US
                    </a>
                </div>
            </section>

            <PastEvents />
            <EventInquiry />
        </main>
    );
}

export default Events;
