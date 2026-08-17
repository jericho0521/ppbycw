import React from 'react';
import styles from './PricingMembership.module.css';

const HOURLY_RATES = [
  { title: 'PC GAMING', nonMember: 'RM8/HR', member: 'RM6/HR' },
  { title: 'RACING SIMULATOR', nonMember: 'RM15/HR', member: 'RM12/HR' },
  { title: 'PS5', nonMember: 'RM30/HR', member: 'RM25/HR' }
];

const MEMBER_PACKAGES = [
  { title: 'PC Gaming', prices: ['RM15/3HR', 'RM26/6HR'] },
  { title: 'Racing Simulator', prices: ['RM30/3HR', 'RM50/6HR'] }
];

const BIRTHDAY_BENEFITS = [
  { duration: 'FREE 1 HOUR', offering: 'PLAYSTATION 5' },
  { duration: 'FREE 2 HOUR', offering: 'RACING SIMULATOR' },
  { duration: 'FREE 3 HOUR', offering: 'PC GAMING' }
];

function PricingMembership() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.sectionBody}>
        <div id="pricing-section" className={styles.pricingSection}>
          <h1><b>PRICING &amp; RATES</b></h1>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.pricingBox}>
            {HOURLY_RATES.map((rate) => (
              <div key={rate.title} className={styles.pricingCategory}>
                <h2>{rate.title}</h2>
                <div className={styles.pricingDetails}>
                  <p>
                    <span>Non-member</span>
                    <span className={styles.price}>{rate.nonMember}</span>
                  </p>
                  <p className={styles.memberRate}>
                    <span>Member</span>
                    <span className={styles.price}>{rate.member}</span>
                  </p>
                </div>
              </div>
            ))}

            <div className={styles.pricingCategory}>
              <h2>MEMBER EXCLUSIVE PACKAGES</h2>
              <div className={styles.pricingDetails}>
                {MEMBER_PACKAGES.map((memberPackage) => (
                  <div key={memberPackage.title} className={styles.package}>
                    <span className={styles.packageTitle}>{memberPackage.title}</span>
                    <div className={styles.priceGroup}>
                      {memberPackage.prices.map((price) => (
                        <span key={price} className={styles.price}>{price}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.memberBox}>
            <div className={styles.pricingSection}>
              <div className={styles.pricingCategory}>
                <h2>JOIN OUR MEMBERSHIP NOW</h2>
                <div className={styles.memberDetails}>
                  <p>Registration fee of RM100<br />Enjoy member exclusive rates and packages</p>
                </div>
              </div>

              <div className={styles.pricingCategory}>
                <h2>SPECIAL RATES</h2>
                <div className={styles.pricingDetails}>
                  <p>
                    RM50 reload:<br />bonus credit of RM 5<br />
                    <span>RM100 reload:<br />bonus credit of RM15</span>
                  </p>
                </div>
              </div>

              <div className={styles.pricingCategory}>
                <h2 className={styles.birthdayBenefitsTitle}>BIRTHDAY BENEFITS</h2>
                <div className={styles.birthdayBenefitsDetails}>
                  {BIRTHDAY_BENEFITS.map((benefit, index) => (
                    <React.Fragment key={benefit.offering}>
                      {index > 0 && <div className={styles.birthdayOr}>or</div>}
                      <div className={styles.birthdayBenefit}>
                        <span>{benefit.duration}</span>
                        {benefit.offering}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingMembership;
