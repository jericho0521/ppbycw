import React from 'react';
import { PS5_GAMES } from '../../config/constants';
import racingSimulator from '../../Images/optimized/rs_ppbycw_optimized.png';
import pcGaming from '../../Images/optimized/pc_ppbycw_optimized.png';
import playstation from '../../Images/optimized/ps5new_optimized.png';
import styles from './GamingOfferings.module.css';

const OFFERINGS = [
  {
    title: 'Racing Simulator',
    detailTitle: 'Specifications',
    details: ['PlayStation 5', 'Logitech G29'],
    image: racingSimulator
  },
  {
    title: 'PC Gaming',
    detailTitle: 'Specifications',
    details: ['AMD Ryzen 5 5500', 'MSI GeForce RTX 3070', '16 GB DDR4-3200', 'Samsung 27-inch 165 Hz'],
    image: pcGaming
  },
  {
    title: 'PlayStation 5',
    detailTitle: 'Games',
    details: PS5_GAMES,
    image: playstation
  }
];

function GamingOfferings() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.rowBar}>
        <div id="rigs-section" className={styles.titleContainer}>
          <br />
          <h2><b>Services &amp; Rigs</b></h2>
          <p>Select an image to view specifications and games.</p>
          <br />
        </div>

        <div className={styles.imagesContainer}>
          {OFFERINGS.map((offering) => (
            <div key={offering.title} className={styles.imageWrapper}>
              <img src={offering.image} alt={offering.title} loading="lazy" />
              <div className={styles.overlayText}>
                <div className={styles.initialText}>{offering.title}</div>
                <div className={styles.hoverText}>
                  <h3><b>{offering.detailTitle}</b></h3>
                  {offering.details.map((detail) => <p key={detail}>{detail}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GamingOfferings;
