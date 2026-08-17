import React from 'react';
import styles from './PricingMembership.module.css';

const HOURLY_RATES = [
  { title: 'PC Gaming', nonMember: 'RM8/hour', member: 'RM6/hour' },
  { title: 'Racing Simulator', nonMember: 'RM15/hour', member: 'RM12/hour' },
  { title: 'PlayStation 5', nonMember: 'RM30/hour', member: 'RM25/hour' }
];

const MEMBER_PACKAGES = [
  { title: 'PC Gaming', prices: ['RM15 / 3 hours', 'RM26 / 6 hours'] },
  { title: 'Racing Simulator', prices: ['RM30 / 3 hours', 'RM50 / 6 hours'] }
];

const BIRTHDAY_BENEFITS = [
  { duration: 'Free 1 hour', offering: 'PlayStation 5' },
  { duration: 'Free 2 hours', offering: 'Racing Simulator' },
  { duration: 'Free 3 hours', offering: 'PC Gaming' }
];

function PricingMembership() {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.sectionBody}>
        <div id="pricing-section" className={styles.pricingSection}>
          <h2><b>Pricing &amp; Rates</b></h2>
        </div>

        <div className={styles.boxContainer}>
          <div className={styles.pricingBox}>
            {HOURLY_RATES.map((rate) => (
              <div key={rate.title} className={styles.pricingCategory}>
                <h3>{rate.title}</h3>
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
              <h3>Member-Exclusive Packages</h3>
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
                <h3>Join Our Membership</h3>
                <div className={styles.memberDetails}>
                  <p>RM100 registration fee<br />Enjoy member-exclusive rates and packages.</p>
                </div>
              </div>

              <div className={styles.pricingCategory}>
                <h3>Special Reload Rates</h3>
                <div className={styles.pricingDetails}>
                  <p>
                    RM50 reload:<br />RM5 bonus credit<br />
                    <span>RM100 reload:<br />RM15 bonus credit</span>
                  </p>
                </div>
              </div>

              <div className={styles.pricingCategory}>
                <h3 className={styles.birthdayBenefitsTitle}>Birthday Benefits</h3>
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
