import React from 'react';

export default function Seasons(props) {
    return (
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
    );
}