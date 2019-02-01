import React from 'react';
import { CirclePicker } from 'react-color'
import {connect} from 'react-redux';
import swatches from '../../colors';

import { newSkintone } from '../../actions/createOutfits';

const flattenSkintones = (groups) => {
    let arr = Object.keys(groups).map((group) => 
      Object.values(groups[group]))
    let newArray = [].concat.apply([], arr);
    return newArray
}

const center = {
    width: "250px",
    display: "flex",
    margin: "20px auto"
}

const SelectSkintone = ({ dispatch }) => {

        return (
            <div style={center}>
                <CirclePicker 
                    colors={flattenSkintones(swatches.skintones)}
                    onChange={ (color, event) => dispatch(newSkintone(color.hex)) }
                />
            </div>
        );    
}

const mapStateToProps = state => ({
    skintone: state.skintone
})

export default connect(mapStateToProps)(SelectSkintone);