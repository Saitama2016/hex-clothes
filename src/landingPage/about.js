import React from 'react';

export function About() {
    return (
        <div>
            <h3 className="App-intro">How to use HexClothes!</h3>
            <section>
                <div className="step">
                  <p>Step 1: Select your Skintone for your Avatar</p>
                  <img className="lightSkintones" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-tints-eb0738d4.svg" alt="light skintones" />
                  <br></br>
                  <img className="darkSkintones" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-shades-9d0efa0b.svg" alt="dark skintones" />
                </div>
            </section>
            <section>
                <div className="step">
                  <p>Step 2: Select Articles of Clothing!</p>
                  <img className="modernClothes" src="https://i.pinimg.com/originals/8c/b2/93/8cb2938475839ee884ab673c7f517b10.jpg" alt="Mannequin options" />
                </div>
            </section>
            <section>
                <div className="step">
                  <p>Step 3: Select Color of Your Clothes!</p>
                  <img className="colorWheel" src="https://www.sessions.edu/wp-content/themes/divi-child/color-calculator/wheel-3-rgb.png" alt="Color Wheel" />
                </div>
            </section>
        </div>
    );
}