import React from 'react';
import promotion from '../../Images/optimized/rnr.png';
import store from '../../Images/optimized/store.png';
import community1 from '../../Images/optimized/community_1.png';
import community2 from '../../Images/optimized/community_2.png';
import community4 from '../../Images/optimized/community_4.png';
import community5 from '../../Images/optimized/community_5.png';
import community6 from '../../Images/optimized/community_6.png';
import styles from './VenueOverview.module.css';

const COMMUNITY_IMAGES = [
  { src: store, alt: 'Store Front' },
  { src: community1, alt: 'Community Member 1' },
  { src: community2, alt: 'Community Member 2' },
  { src: community4, alt: 'Community Member 3' },
  { src: community5, alt: 'Community Member 4' },
  { src: community6, alt: 'Community Member 5' }
];

function VenueOverview() {
  return (
    <>
      <section id="promotion" className={styles.promotion}>
        <div className={styles.promoBox}>
          <div className={styles.promoSection}>
            <h2>PROMOTIONS</h2>
            <img src={promotion} alt="Promo 1" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.sectionBody}>
          <div className={styles.sectionContainer}>
            <h1 className="section-heading"><b>ABOUT US</b></h1>
            <div className={styles.contentCategory}>
              <div className={styles.contentDetails}>
                <p>
                  Project Play By CW founded in 2024. Project Play is more than just a gaming hub.
                  It's space where passions come alive, where everyone, friends and family could come
                  together, have some fun and find a sense of belonging. It's not just about the games
                  we play, but the connections we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className={styles.community}>
        <div className={styles.sectionBody}>
          <div className={styles.sectionContainer}>
            <h1 className="section-heading"><b>OUR COMMUNITY</b></h1>
            <div className={styles.contentCategory}>
              <div className={styles.contentDetails}>
                <p>
                  Whether you're a seasoned competitor, a casual gamer, or someone simply seeking a place to unwind,
                  Project Play By CW is here to welcome you. It's a place where your enthusiasm is shared,
                  your victories celebrated, and where every moment spent here feels like a part of home.
                  At Project Play By CW, you're never just a player, you're a valued member of a family.
                  Welcome to a place where you belong.
                </p>
              </div>
            </div>
            <div className={styles.contentCategory}>
              <div className={styles.galleryContainer}>
                <div className={styles.galleryGrid}>
                  {COMMUNITY_IMAGES.map((image) => (
                    <img key={image.alt} src={image.src} alt={image.alt} loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VenueOverview;
