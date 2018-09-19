import React from 'react';
import './seasons.css'; 

export default function Seasons() {
    return (
      <div>
        <h3>Pick a Season!</h3>
        <div className="seasons">
          <div className="col-6">
            <input className="winter" type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmbtyG_huZ5unWz8fPTu5f-6kS44kZ_12T_AHkRBWRANbsNO6" alt="Winter Forest" />
            <p>Winter</p>
          </div>
          <div className="col-6">
            <input className="spring" type="image" src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2629043.jpg" alt="Spring Forest" />
            <p>Spring</p>
          </div>
          <div className="col-6">
            <input className="summer" type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiK-3mbM_0tKziRd8edXxnVI_DYxYJmm3mQJKSox5OkTHRbC5k" alt="Summer Forest" />
            <p>Summer</p>
          </div>
          <div className="col-6">
            <input className="autumn" type="image" src="https://images.pexels.com/photos/235721/pexels-photo-235721.jpeg?auto=compress&cs=tinysrgb&h=350" alt="Autumn Forest" />
            <p>Autumn</p>
          </div>
        </div>
      </div>
    );
}