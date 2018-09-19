import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

export function About() {
    return (
        <div>
            <h3 className="App-intro">How to use HexClothes!</h3>
            <section>
                <div className="step">
                  <p>Step 1: Select a Season</p>
                </div>
                <div className="seasons">
                  <div className="col-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmbtyG_huZ5unWz8fPTu5f-6kS44kZ_12T_AHkRBWRANbsNO6" alt="Winter Forest"></img>
                    <p>Winter</p>
                  </div>
                  <div className="col-6">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2629043.jpg" alt="Spring Forest" />
                    <p>Spring</p>
                  </div>
                  <div className="col-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiK-3mbM_0tKziRd8edXxnVI_DYxYJmm3mQJKSox5OkTHRbC5k" alt="Summer Forest" />
                    <p>Summer</p>
                  </div>
                  <div className="col-6">
                    <img src="https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Autumn Forest" />
                    <p>Autumn</p>
                  </div>
                </div>
            </section>
            <section>
                <div className="step">
                  <p>Step 2: Select your Skintone for your Avatar</p>
                  <img className="lightSkintones" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-tints-eb0738d4.svg" alt="light skintones" />
                  <br></br>
                  <img className="darkSkintones" src="https://htmlcolorcodes.com/assets/images/color-picker/html-color-codes-color-shades-9d0efa0b.svg" alt="dark skintones" />
                </div>
            </section>
            <section>
                <div className="step">
                  <p>Step 3: Create your outfits using our recommended complimentary colors!</p>
                  <img className="modernClothes" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYr8px-MHe9V1XrnO4rWuf5ZIkrsTXjN9b2jEH7TOybnQ30_au" alt="stack of modern clothes" />
                </div>
            </section>
        </div>
    );
}