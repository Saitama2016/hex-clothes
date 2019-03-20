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
    skintone: state.outfitReducer.skintone,
    shirtColor: state.outfitReducer.shirtColor,
    shirtType: state.outfitReducer.shirtType,
    shortSleeveVisibility: state.outfitReducer.shortSleeveVisibility,
    longSleeveVisibility: state.outfitReducer.longSleeveVisibility,
    pantsColor: state.outfitReducer.pantsColor,
    pantsType: state.outfitReducer.pantsType,
    shoesColor: state.outfitReducer.shoesColor
})

export default connect(mapStateToProps)(OutFitForm);