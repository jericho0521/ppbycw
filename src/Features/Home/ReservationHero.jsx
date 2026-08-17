import React from 'react';
import { WHATSAPP_URL } from '../../config/constants';
import logo from '../../Images/optimized/pp_logo.png';
import styles from './ReservationHero.module.css';

const STATS = [
  { value: '2024', label: 'Founded' },
  { value: '3', label: 'Gaming Rigs' },
  { value: '14', unit: 'hrs', label: 'Open Daily' },
  { value: '7', label: 'Days a Week' }
];

function ReservationHero() {
  return (
    <>
      <section id="reservation" className={styles.reservation}>
        <div className={styles.titleContainer}>
          <div className={styles.logoImage}>
            <img src={logo} alt="Project Play By CW" fetchpriority="high" />
          </div>
          <h1 className={styles.heroTagline}>
            {'Project Play By CW: Sim Racing & Gaming in Bandar Sunway'.split('').map((character, index) => (
              <span
                key={index}
                className={styles.taglineCharacter}
                style={{ animationDelay: `${0.8 + index * 0.06}s` }}
              >
                {character === ' ' ? '\u00A0' : character}
              </span>
            ))}
          </h1>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reservationButton}
          >
            <span className="montserrat-bold">Reserve Now</span>
          </a>
          <p className={styles.bookingNote}>
            *Applicable only to PlayStation 5 and racing simulator bookings.
          </p>
        </div>
      </section>

      <section id="stats" className={styles.stats}>
        <div className={styles.statsStrip}>
          {STATS.map((stat, index) => (
            <React.Fragment key={stat.label}>
              {index > 0 && <div className={styles.statDivider} />}
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {stat.value}
                  {stat.unit && <span className={styles.statUnit}>{stat.unit}</span>}
                </span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}

export default ReservationHero;
