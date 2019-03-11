import React from 'react';
import SideNav from '../navigation/sideNav';
import TopNav from '../navigation/topNav';
import './about.css';

export function About() {
    return (
        <div>
            <header className="aboutHeader">
              <i onClick={() => document.getElementById("mySidenav").style.width = "500px"} className="fas fa-bars"></i>
              <h1 className="App-logo">HexClothes</h1>
              <h2 className="App-title">Make outfits that complement you!</h2>
              <TopNav />
            </header>
            <SideNav />
            <h3 className="App-intro">How to use HexClothes!</h3>
            <section>
                <div className="step skintoneDesc">
                  <p>Step 1: Select the Skintone for your Model</p>
                  <img className="lightSkintones" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-tints-eb0738d4.svg" alt="light skintones" />
                  <br></br>
                  <img className="darkSkintones" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-shades-9d0efa0b.svg" alt="dark skintones" />
                </div>
            </section>
            <section>
                <div className="step clothingDesc">
                  <p>Step 2: Select Articles of Clothing!</p>
                  <img className="modernClothes" src="https://i.pinimg.com/originals/8c/b2/93/8cb2938475839ee884ab673c7f517b10.jpg" alt="Mannequin options" />
                </div>
            </section>
            <section>
                <div className="step colorDesc">
                  <p>Step 3: Choose From Our Recommended Colors!</p>
                  <img className="colorWheel" src="https://www.sessions.edu/wp-content/themes/divi-child/color-calculator/wheel-3-rgb.png" alt="Color Wheel" />
                </div>
            </section>
        </div>
    );
}