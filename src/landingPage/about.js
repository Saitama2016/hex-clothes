import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

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
                  <p>Step 2: Create your outfits using our recommended complimentary colors!</p>
                  <img className="modernClothes" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYr8px-MHe9V1XrnO4rWuf5ZIkrsTXjN9b2jEH7TOybnQ30_au" alt="stack of modern clothes" />
                </div>
            </section>
        </div>
    );
}