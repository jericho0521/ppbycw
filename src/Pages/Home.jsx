import React from 'react';
import { Link } from 'react-router-dom';
import { logo, image1, image2, image3, store, com1, com2, com4, com5, com6 } from '../Images';
import '../Assets/Font.css'; //Font
// import '../Assets/image.css'; 
import '../Assets/row.css'; // Row
import '../Assets/social.css'; //Social Icons
import './Home.css'; //Home
import '../App.css'; //App
import './About.css';
import OptimizedImage from '../Components/OptimizedImage';





function Home() {
  return (
    <div className="main-content">
      {/* Reservation Section */}
      <section id="reservation">
        <div className="title-container">
          <div className="logo-image">
            <OptimizedImage src={logo} className="image-item" alt="Project Play Logo" />
          </div>
          <a href="https://wa.me/601116281524" target="_blank" rel="noopener noreferrer" className="button">
            <h4 className="montserrat-bold">RESERVATION</h4>
          </a>
          <br></br>
          <h4>*APPLICABLE ONLY FOR PLAYSTATION 5 & RACING SIMULATOR</h4>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="row-bar">
          <div id="rigs-section" classname="title-container">
            <br></br>
            <h1><b>SERVICES & RIGS</b></h1>
            <p>click image for more details</p>
            <br />
          </div>

          <div className="images-container">
            {/* Image 1 */}
            <div className="image-wrapper">
              <OptimizedImage src={image1} alt="Racing Simulator" />
              <div 
                className="overlay-text">
                <div className="initial-text">Racing Simulator</div>
                <div className="hover-text">
                  <h1>SPECS</h1>
                  <p>Playstation 5</p>
                  <p>Logitech G29</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="image-wrapper">
              <OptimizedImage src={image2} alt="PC Gaming" />
              <div 
                className="overlay-text">
                <div className="initial-text">PC Gaming</div>
                <div className="hover-text">
                  <h1><b>SPECS</b></h1>
                  <p>AMD RYZEN 5 5500</p>
                  <p>MSI GEFORCE RTX 3070</p>
                  <p>DDR4 3200MHZ 16GB</p>
                  <p>Samsung27" 165Hz</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="image-wrapper">
              <OptimizedImage src={image3} alt="Playstation 5" />
              <div 
                className="overlay-text">
                <div className="initial-text">Playstation 5</div>
                <div className="hover-text">
                  <h1>GAMES</h1>
                  <p>FC 25</p>
                  <p>UFC 5</p>
                  <p>Overcooked</p>
                  <p>NBA 2K24</p>
                  <p>Tekken 8</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <div className="row-bar2">
          <div id="pricing-section" className="pricing-section">
            <h1><b>PRICING & RATES</b></h1>
          </div>

          <div className="box-container">
            {/* Pricing Section */}
            <div className="pricing-box">

              {/* Pricing Section */}
              <div className="pricing-category">
                <h2>PC GAMING</h2>
                <div className="pricing-details">
                  <p>
                    <span>Non-member</span>
                    <span className="price">RM8/HR</span>
                  </p>
                  <p>
                    <span>Member</span>
                    <span className="price">RM6/HR</span>
                  </p>
                </div>
              </div>

              <div className="pricing-category">
                <h2>RACING SIMULATOR</h2>
                <div className="pricing-details">
                  <p>
                    <span>Non-member</span>
                    <span className="price">RM15/HR</span>
                  </p>
                  <p>
                    <span>Member</span>
                    <span className="price">RM12/HR</span>
                  </p>
                </div>
              </div>

              <div className="pricing-category">
                <h2>PS5</h2>
                <div className="pricing-details">
                  <p>
                    <span>Standard Rate</span>
                    <span className="price">RM25/HR</span>
                  </p>
                </div>
              </div>

              <div className="pricing-category">
                <h2>MEMBER EXCLUSIVE PACKAGES</h2>
                <div className="pricing-details">
                  <div className="package">
                    <span className="package-title">PC Gaming</span>
                    <div className="price-group">
                      <span className="price">RM15/3HR</span>
                      <span className="price">RM26/6HR</span>
                    </div>
                  </div>
                  <div className="package">
                    <span className="package-title">Racing Simulator</span>
                    <div className="price-group">
                      <span className="price">RM30/3HR</span>
                      <span className="price">RM50/6HR</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Membership Section */}
            <div className="member-box">
              <div className="pricing-section">

                <div className="pricing-category">
                  <h2>JOIN OUR MEMBERSHIP NOW</h2>
                  <div className="member-details">
                    <p>Registration fee of RM50
                      <br />Enjoy member exclusive rates and packages
                      <br />First timers will enjoy a bonus credit of RM20</p>
                  </div>
                </div>

                <div className="pricing-category">
                  <h2>SPECIAL RATES</h2>
                  <div className="pricing-details">
                    <p>RM50 reload:
                      <br />bonus credit of RM 5
                      <br /><span>RM100 reload:
                      <br />bonus credit of RM15</span></p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="row-bar2">
          <div className="section-container">
            <h1><b>ABOUT US</b></h1>
            <div className="content-category">
              <div className="content-details">
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

      {/* Community Section */}
      <section id="community">
        <div className="row-bar2">
          <div className="section-container">
            <h1><b>OUR COMMUNITY</b></h1>
            <div className="content-category">
              <div className="content-details">
                <p>
                  Whether you're a seasoned competitor, a casual gamer, or someone simply seeking a place to unwind, 
                  Project Play By CW is here to welcome you. It's a place where your enthusiasm is shared, 
                  your victories celebrated, and where every moment spent here feels like a part of home. 
                  At Project Play By CW, you're never just a player, you're a valued member of a family. 
                  Welcome to a place where you belong.
                </p>
              </div>
            </div>
            <div className="content-category">
              <div className="gallery-container">
                <div className="gallery-grid">
                  <OptimizedImage src={store} alt="Store Front"/>
                  <OptimizedImage src={com1} alt="Community Member 1"/>
                  <OptimizedImage src={com2} alt="Community Member 2"/>
                  <OptimizedImage src={com4} alt="Community Member 3"/>
                  <OptimizedImage src={com5} alt="Community Member 4"/>
                  <OptimizedImage src={com6} alt="Community Member 5"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
