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
  { src: store, alt: 'Project Play By CW storefront in Bandar Sunway' },
  { src: community1, alt: 'Two gamers playing at Project Play PC stations' },
  { src: community2, alt: 'Gamer at a PC near the Project Play entrance' },
  { src: community4, alt: 'Project Play community member making peace signs' },
  { src: community5, alt: 'Gamer seated at a Project Play PC station' },
  { src: community6, alt: 'Two gamers at a row of Project Play gaming PCs' }
];

function VenueOverview() {
  return (
    <>
      <section id="promotion" className={styles.promotion}>
        <div className={styles.promoBox}>
          <div className={styles.promoSection}>
            <h2>Promotions</h2>
            <img
              src={promotion}
              alt="Race & Relax daily racing simulator promotion for four players"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={styles.sectionBody}>
          <div className={styles.sectionContainer}>
            <h2 className="section-heading"><b>About Us</b></h2>
            <div className={styles.contentCategory}>
              <div className={styles.contentDetails}>
                <p>
                  Founded in 2024, Project Play By CW is more than a gaming hub. It is a
                  welcoming space in Bandar Sunway where friends, families, and gaming
                  communities can play, compete, and connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className={styles.community}>
        <div className={styles.sectionBody}>
          <div className={styles.sectionContainer}>
            <h2 className="section-heading"><b>Our Community</b></h2>
            <div className={styles.contentCategory}>
              <div className={styles.contentDetails}>
                <p>
                  Whether you are a seasoned competitor, a casual gamer, or simply looking
                  for a place to unwind, you are welcome at Project Play By CW. Share your
                  enthusiasm, celebrate each victory, and find a community where you belong.
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
