import React from 'react';
import { WHATSAPP_URL } from '../../config/constants';
import logo from '../../Images/optimized/pp_logo.png';
import styles from './ReservationHero.module.css';

const STATS = [
  { value: '2024', label: 'FOUNDED' },
  { value: '3', label: 'GAMING RIGS' },
  { value: '14', unit: 'HRS', label: 'OPEN DAILY' },
  { value: '7', label: 'DAYS A WEEK' }
];

function ReservationHero() {
  return (
    <>
      <section id="reservation" className={styles.reservation}>
        <div className={styles.titleContainer}>
          <div className={styles.logoImage}>
            <img src={logo} alt="Project Play Logo" fetchpriority="high" />
          </div>
          <p className={styles.heroTagline}>
            {'WHERE GAMERS BELONG, PLAY TODAY'.split('').map((character, index) => (
              <span
                key={index}
                className={styles.taglineCharacter}
                style={{ animationDelay: `${0.8 + index * 0.06}s` }}
              >
                {character === ' ' ? '\u00A0' : character}
              </span>
            ))}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reservationButton}
          >
            <h4 className="montserrat-bold">RESERVATION</h4>
          </a>
          <br />
          <h4>*APPLICABLE ONLY FOR PLAYSTATION 5 &amp; RACING SIMULATOR</h4>
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
