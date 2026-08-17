import React from 'react';
import { PS5_GAMES } from '../../config/constants';
import racingSimulator from '../../Images/optimized/rs_ppbycw_optimized.png';
import pcGaming from '../../Images/optimized/pc_ppbycw_optimized.png';
import playstation from '../../Images/optimized/ps5new_optimized.png';
import styles from './GamingOfferings.module.css';

const OFFERINGS = [
  {
    title: 'Racing Simulator',
    detailTitle: 'SPECS',
    details: ['Playstation 5', 'Logitech G29'],
    image: racingSimulator
  },
  {
    title: 'PC Gaming',
    detailTitle: 'SPECS',
    details: ['AMD RYZEN 5 5500', 'MSI GEFORCE RTX 3070', 'DDR4 3200MHZ 16GB', 'Samsung27" 165Hz'],
    image: pcGaming
  },
  {
    title: 'Playstation 5',
    detailTitle: 'GAMES',
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
          <h1><b>SERVICES &amp; RIGS</b></h1>
          <p>click image for more details</p>
          <br />
        </div>

        <div className={styles.imagesContainer}>
          {OFFERINGS.map((offering) => (
            <div key={offering.title} className={styles.imageWrapper}>
              <img src={offering.image} alt={offering.title} loading="lazy" />
              <div className={styles.overlayText}>
                <div className={styles.initialText}>{offering.title}</div>
                <div className={styles.hoverText}>
                  <h1><b>{offering.detailTitle}</b></h1>
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
