import React from 'react';
import './styles.css';

// IMAGES
import { 
  logo, 
  image1, 
  image2, 
  image3, 
  price, 
  member, 
  com1, 
  com2, 
  com3, 
  com4, 
  com5, 
  com6, 
  store,
  newprice
} from './Images';



function Home() {
  return (
    
    <div className="main-content">
      <div className="title-container">
        <div className="logo-image">
          <img src={logo} className="image-item" alt="Project Play Logo" />
          </div>
            <a href="https://wa.me/601116281524" target="_blank" className="button">
            <h4 className="montserrat-bold">RESERVATION</h4>
            </a>
            <br></br>
            <h6>*APPLICABLE ONLY FOR PLAYSTATION 5 & RACING SIMULATOR </h6>
          </div>

      {/* SERVICES AND RIGS SECTION */}
    <div className="row-bar">

      <div id="rigs-section" classname="title-container">
          <br></br>
          <h1><b>SERVICES & RIGS</b></h1>
          <br></br>
      </div>

        <div className="images-container">

          {/* Image 1 */}
          <div className="image-wrapper">
            <img src={image1} alt="Racing Simulator" />
            <div 
            className="overlay-text">
              <div className="initial-text">Racing Simulator</div>
              <div className="hover-text">Specifications:
                <br></br>
                <b>Playstation 5</b>
                <br></br>
                <p>Logitech G29</p>
                </div>
            </div>
          </div>

          {/* Image 2 */}
          <div className="image-wrapper">
              <img src={image2} alt="PC Gaming" />
              <div 
              className="overlay-text">
              <div className="initial-text">PC Gaming</div>
              <div className="hover-text">Specifications:

              <ul>
              <li>Ryzen 5 5500</li>
              <li>GEFORCE RTX 3070</li>
              <li>16GB DDR4 RAM</li>
              <li>27" Samsung G5 51C 165Hz</li>
            </ul>

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

              <p>Games:</p>
              <ul>
                <li>FC 25</li>
                <li>UFC 5</li>
                <li>Overcooked</li>
                <li>NBA 2K24</li>
                <li>Tekken 8</li>
              </ul>
    
                </div>
              </div>
          </div>

        </div>
    </div>



      {/* PRICING AND RATES SECTION */}

      <div className="row-bar2">

          <div href="#pricing-section" id="pricing-section" classname="title-container">
            <h1><b>PRICING</b></h1>
            <br></br>
          </div>

            <div className="images-container">

              {/* PRICE */}
              <div className="image-wrapper-price">
                  <img src={newprice} opacity="100%" alt="Pricing"/>
              </div>

              {/* MEMBER */}
              <div className="image-wrapper-price">
                  <img src={member} alt="Member"/>
              </div>

            </div>
      </div>
        
      
      <div className="row-bar3">

        <div href="#community-section" id="community-section" classname="title-container">

          <div class="about-container">
            <h1 class="about-heading">About Us</h1>
              <div class="about-content">
                  <p>Project Play By CW founded in 2024</p>
                  <p>Project Play By CW is more than just a gaming hub. It's space where passions come alive,
                    where everyone, friends and family could come together, have some fun and find a sense of belonging.
                    It’s not just about the games we play, but the connections we build.</p>
              </div>
          </div>
        </div>
      </div>
    

      <div className="row-bar">
              <h1><b>OUR COMMUNITY</b></h1>

              <div class="about-container">
              <div class="about-content">
              <p>Whether you're a seasoned competitor, a casual gamer, or someone simply seeking a place to unwind, 
              Project Play By CW is here to welcome you.
              It's a place where your enthusiasm is shared, your victories celebrated, and where every moment spent here feels like a part of home.
              At Project Play By CW, you’re never just a player, you’re a valued member of a family. Welcome to a place where you belong.</p>
              </div>
              </div>

        <div className="images-container">

          <div className="image-wrapper">
              <img src={store} />
          </div>

          <div className="image-wrapper">
              <img src={com1} />
          </div>

          <div className="image-wrapper">
              <img src={com2} />
          </div>

          <div className="image-wrapper">
              <img src={com3} />
          </div>

          <div className="image-wrapper">
              <img src={com4} />
          </div>

          <div className="image-wrapper">
              <img src={com5} />
          </div>

          <div className="image-wrapper">
              <img src={com6} />
          </div>

        </div>
      </div>
      </div>


    
  );
}

export default Home;
