import React from 'react';
import { connect } from 'react-redux';
import './wardrobe.css';
import Model from './model';
import OutFitForm from './outfitFormComps/outfitForm';

const Wardrobe = () => {
    
    return (
        <div>
            <h3>Create your Outfit</h3>
            <section>
                <Model />
                <br />
                <OutFitForm />
            </section>
            <h3>Checkout your previous Outfits</h3>
            <section>
                <p>[Placeholder for outfit log]</p>
                <p>[Option to edit or delete outfit]</p>
            </section>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        openForm: state.openForm,
        skintone: state.skintone,
        clothes: state.clothes
    }
}

export default connect(mapStateToProps)(Wardrobe);