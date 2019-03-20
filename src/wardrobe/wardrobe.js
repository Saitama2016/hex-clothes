import React from 'react';
import { connect } from 'react-redux';
import './wardrobe.css';

import Model from './model';
import OutFitForm from './outfitFormComps/outfitForm';
import TopNavLogOut from '../navigation/topNavLogOut';
import SideNavLogOut from '../navigation/sideNavLogOut';

class Wardrobe extends React.Component {
    render() {
        return (
            <div>
                <header className="wardrobeHeader">
                    <i onClick={() => document.getElementById("mySidenav").style.width = "500px"} className="fas fa-bars"></i>
                    <h1 className="App-logo">HexClothes</h1>
                    <h2 className="App-title">Make outfits that complement you!</h2>
                    <TopNavLogOut />
                </header>
                <SideNavLogOut />
                <h3 className="wardrobeInstructions">Create your Outfit</h3>
                <section className="createOutfitForm">
                    <Model />
                    <br />
                    <OutFitForm />
                </section>
                <h3 className="wardrobeInstructions">Checkout your previous Outfits</h3>
                <section className="outfitLog">
                    <p>[Placeholder for outfit log]</p>
                    <p>[Option to edit or delete outfit]</p>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        skintone: state.outfitReducer.skintone,
        shirtColor: state.outfitReducer.shirtColor,
        shirtType: state.outfitReducer.shirtType,
        shortSleeveVisibility: state.outfitReducer.shortSleeveVisibility,
        longSleeveVisibility: state.outfitReducer.longSleeveVisibility,
        pantsColor: state.outfitReducer.pantsColor,
        pantsType: state.outfitReducer.pantsType,
        shoesColor: state.outfitReducer.shoesColor
    }
}

export default connect(mapStateToProps)(Wardrobe);