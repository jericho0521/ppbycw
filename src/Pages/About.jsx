import React from 'react';
import './About.css';

function About() {
  return (
    <main className="main-content about-page">
      <section id="about">
        <div className="section-container">
          <h1 className="section-heading"><b>About Project Play By CW</b></h1>
          <div className="content-category">
            <div className="content-details">
              <p>
                Project Play By CW is a gaming destination in Bandar Sunway,
                Subang Jaya, featuring racing simulators, gaming PCs, and
                PlayStation 5 consoles. Experience realistic racing with a
                Logitech G29 wheel and a dedicated simulator seat.
              </p>
            </div>
          </div>

          <h2 className="section-heading"><b>Our Mission</b></h2>
          <div className="content-category">
            <div className="content-details">
              <p>
                We create an inclusive gaming environment that brings together
                players from all walks of life through quality equipment,
                memorable experiences, and welcoming service.
              </p>
            </div>
          </div>

          <h2 className="section-heading"><b>What Sets Us Apart</b></h2>
          <div className="content-category">
            <div className="content-details">
              <div className="features-grid">
                <div className="feature-item">
                  <i aria-hidden="true" className="fa-solid fa-trophy" />
                  <h3>Premium Equipment</h3>
                  <p>Gaming PCs, racing simulators, and PlayStation 5 consoles.</p>
                </div>
                <div className="feature-item">
                  <i aria-hidden="true" className="fa-solid fa-users" />
                  <h3>Community Focus</h3>
                  <p>Regular events, tournaments, and a welcoming gaming community.</p>
                </div>
                <div className="feature-item">
                  <i aria-hidden="true" className="fa-solid fa-location-dot" />
                  <h3>Prime Location</h3>
                  <p>Conveniently located in Bandar Sunway near public transport.</p>
                </div>
                <div className="feature-item">
                  <i aria-hidden="true" className="fa-solid fa-clock" />
                  <h3>Extended Hours</h3>
                  <p>Open daily from 12 p.m. to 2 a.m.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-heading"><b>Our Story</b></h2>
          <div className="content-category">
            <div className="content-details">
              <p>
                Project Play By CW grew from a vision to create more than another
                gaming centre: a space where players can enjoy excellent equipment,
                meet fellow enthusiasts, and immerse themselves in their favourite games.
              </p>
              <p>
                Today, we host everything from casual sessions to tournaments in
                Bandar Sunway, supported by carefully selected equipment and a
                dedicated team.
              </p>
            </div>
          </div>

          <h2 className="section-heading"><b>Our Values</b></h2>
          <div className="content-category">
            <div className="content-details">
              <div className="values-grid">
                <div className="value-item">
                  <h3>Excellence</h3>
                  <p>Providing high-quality gaming experiences.</p>
                </div>
                <div className="value-item">
                  <h3>Community</h3>
                  <p>Building lasting connections through gaming.</p>
                </div>
                <div className="value-item">
                  <h3>Passion</h3>
                  <p>Sharing our love for games and competition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
