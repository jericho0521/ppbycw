import React from 'react';
import '../Assets/Font.css'; //Font
import '../Assets/image.css'; //Images
import '../Assets/row.css'; // Row
import '../Assets/social.css'; //Social Icons
import './Home.css'; //Home
import '../App.css'; //App
import './About.css';


// IMAGES
import { 
  logo, 
  image1, 
  image2, 
  image3, 
  // price, 
  // member, 
  com1, 
  com2, 
  // com3, 
  com4, 
  com5, 
  com6, 
  store,
  // newprice
} from '../Images';
// import { BiFontSize } from 'react-icons/bi';



function Home() {
  return (
    
    <div className="main-content">
      <div className="title-container">
        <div className="logo-image">
          <img src={logo} className="image-item" alt="Project Play Logo" />
          </div>
            <a href="https://wa.me/601116281524" target="_blank" rel="noopener noreferrer" className="button">
            <h4 className="montserrat-bold">RESERVATION</h4>
            </a>
            <br></br>
            <h6>*APPLICABLE ONLY FOR PLAYSTATION 5 & RACING SIMULATOR</h6>
          </div>

      {/* SERVICES AND RIGS SECTION */}
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
            <img src={image1} alt="Racing Simulator" />
            <div 
            className="overlay-text">
              <div className="initial-text">Racing Simulator</div>
              <div className="hover-text">
                <h1>SPECIFICATIONS</h1>
                <br></br>
                <p>Playstation 5
                <br></br>
                Logitech G29</p>
                </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="image-wrapper">
              <img src={image2} alt="PC Gaming" />
              <div 
              className="overlay-text">
              <div className="initial-text">PC Gaming</div>
              <div className="hover-text">
              <h1>SPECIFICATIONS</h1>

                <p>
                <dt>AMD RYZEN 5 5500</dt>
                <dt>MSI GEFORCE RTX 3070</dt>
                <dt>DDR4 3200MHZ 16GB</dt>
                <dt>27" 165Hz GAMING MONITOR</dt>
                </p>

                </div>
              </div>
          </div>

          {/* Image 3 */}
          <div className="image-wrapper">
              <img src={image3} alt="Playstation 5" />
              <div 
              className="overlay-text">
              <div className="initial-text">Playstation 5</div>
              <div className="hover-text">

              <h1>GAMES</h1>
              <p>
                <dt>FC 25</dt>
                <dt>UFC 5</dt>
                <dt>Overcooked</dt>
                <dt>NBA 2K24</dt>
                <dt>Tekken 8</dt>
              </p>
    
                </div>
              </div>
          </div>

        </div>
    </div>



      {/* PRICING AND RATES SECTION */}
      

      <div className="row-bar2">

      <div id="pricing-section" className="pricing-section">
      <h1><b>PRICING & RATES</b></h1>
      </div>


<div className="box-container">

  {/* Pricing Section */}
  <div className="pricing-box">

    <div className="pricing-category">
      <h2>PC GAMING</h2>
      <div className="pricing-details">
        <p>Non-member: <span className="price">RM8/HR</span></p>
        <p>Member: <span className="price">RM6/HR</span></p>
      </div>
    </div>

    <div className="pricing-category">
      <h2>RACING SIMULATOR</h2>
      <div className="pricing-details">
        <p>Non-member: <span>RM15/HR</span></p>
        <p>Member: <span>RM12/HR</span></p>
      </div>
    </div>

    <div className="pricing-category">
      <h2>PS5</h2>
      <div className="pricing-details">
        <span>RM25/HR</span>
      </div>
    </div>

    <div className="pricing-category">
      <h2>MEMBER EXCLUSIVE PACKAGES</h2>
      <div className="pricing-details">
        <div className="package">
          <p className="package-title">PC Gaming:</p>
          <div className="price-group">
            <p className="price">RM15/3HR</p>
            <p className="price">RM26/6HR</p>
          </div>
        </div>
        <div className="package">
          <p className="package-title">Racing Simulator:</p>
          <div className="price-group">
            <p className="price">RM30/3HR</p>
            <p className="price">RM50/6HR</p>
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
    
        
      
      <div className="row-bar3">

        <div href="#community-section" id="community-section" classname="title-container">

          <div class="about-container">
            <h1 class="about-heading">ABOUT US</h1>
              <div class="about-content">
                <div class="innertext">
                  Project Play By CW founded in 2024. Project Play is more than just a gaming hub. It's space where passions come alive, where everyone, friends and family could come together, have some fun and find a sense of belonging. It’s not just about the games we play, but the connections we build.
                </div>
            </div>
          </div>
        </div>
      </div>
    

              <div className="row-bar">
                <h1><b>OUR COMMUNITY</b></h1>

              <div class="about-container">
                  <div class="about-content">
                  <div class="innertext">
                      <p>Whether you're a seasoned competitor, a casual gamer, or someone simply seeking a place to unwind, 
                      Project Play By CW is here to welcome you.It's a place where your enthusiasm is shared, 
                      your victories celebrated, and where every moment spent here feels like a part of home. 
                      At Project Play By CW, you’re never just a player, you’re a valued member of a family. Welcome to a place where you belong.</p>
                      <br />
                      </div>
                  </div>
              </div>



        <div className="images-container">

          <div className="image-wrapper">
              <img src={store} alt="front store"/>
          </div>

          <div className="image-wrapper">
              <img src={com1} alt="person1"/>
          </div>

          <div className="image-wrapper">
              <img src={com2} alt="person2"/>
          </div>

          {/* <div className="image-wrapper">
              <img src={com3} />
          </div> */}

          <div className="image-wrapper">
              <img src={com4} alt="person3"/>
          </div>

          <div className="image-wrapper">
              <img src={com5} alt="person4"/>
          </div>

          <div className="image-wrapper">
              <img src={com6} alt="person5"/>
          </div>

        </div>
      </div>
      </div>


    
  );
}

export default Home;
