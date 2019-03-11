import React from 'react';
import ClothesPicker from './pickClothes';
import {connect} from 'react-redux';
import  SelectSkintone from './skintones';


const OutFitForm = () => {
        return (
            <form style={{margin: "10px 0px 0px 0px"}}>
                <label>Select Skintone:</label>
                <SelectSkintone 
                />

                <ClothesPicker
                    />
            <br />
            <button 
                type="submit"
                className="modelSubmit"
            >
                Submit
                </button>
            </form>
        );
}

const mapStateToProps = (state) => ({
    skintone: state.skintone,
    shirtColor: state.shirtColor,
    shirtType: state.shirtType,
    shortSleeveVisibility: state.shortSleeveVisibility,
    longSleeveVisibility: state.longSleeveVisibility,
    pantsColor: state.pantsColor,
    pantsType: state.pantsType,
    shoesColor: state.shoesColor
})

export default connect(mapStateToProps)(OutFitForm);