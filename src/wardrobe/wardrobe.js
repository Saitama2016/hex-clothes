import React from 'react';
import PickClothes from './pickClothes';
import './wardrobe.css';

class Wardrobe extends React.Component {

    render() {
    return (
        <div>
            <h3>Create your Outfit</h3>
            <section>
                <div className="user">
                    {/* Have body parts be same skin color */}
                    <div className="person" id="person">
                        <div className="head"></div>
                        <div className="body">
                          <div className="top"></div>
                          <div className="collar"></div>
                          <div className="left-arm">
                            <div className="left-hand"></div>
                          </div>
                          <div className="right-arm">
                            <div className="right-hand"></div>
                          </div>
                          <div className="shirt">
                            <div className="buttons">
                              <div className="button"></div>
                              <div className="button"></div>
                              <div className="button"></div>
                            </div>
                            <div className="left-short-sleeve" ref="left-short-sleeve"></div>
                            <div className="right-short-sleeve"></div>
                          </div>
                        </div>
                        <div className="waist"></div>
                        <div className="legs">
                          <div className="leg left"></div>
                          <div className="leg right"></div>
                        </div>
                        <div className="feet"></div>
                    </div>
                </div>
                <br />
            <PickClothes />
            </section>
            <h3>Checkout your previous Outfits</h3>
            <section>
                <p>[Placeholder for outfit log]</p>
                <p>[Option to edit or delete outfit]</p>
            </section>
        </div>
    );
    }
}
export default Wardrobe;