import React from 'react';
import ReservationHero from '../Features/Home/ReservationHero';
import GamingOfferings from '../Features/Home/GamingOfferings';
import PricingMembership from '../Features/Home/PricingMembership';
import VenueOverview from '../Features/Home/VenueOverview';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={`main-content ${styles.homePage}`}>
      <ReservationHero />
      <GamingOfferings />
      <PricingMembership />
      <VenueOverview />
    </main>
  );
}

export default Home;
