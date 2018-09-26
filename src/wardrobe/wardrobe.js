import React from 'react';
import './wardrobe.css';

export function Wardrobe() {
    return (
        <div>
            <h3>Create your Outfit</h3>
            <section>
                <div className="user">
                    <div className="person">
                        <div className="hat"></div>
                        <div className="head"></div>
                        <div className="body">
                            <div className="top"></div>
                            <div className="bow"></div>
                            <div className="left-side"></div>
                            <div className="right-side"></div>
                            <div className="shirt"></div>
                        </div>
                        <div className="legs">
                            <div className="left-leg"></div>
                            <div className="right-leg"></div>
                        </div>
                        <div className="feet"></div>
                    </div>
                </div>
            </section>
            <h3>Checkout your previous Outfits</h3>
            <section>
                <p>[Placeholder for outfit log]</p>
                <p>[Option to edit or delete outfit]</p>
            </section>
        </div>
    );
}