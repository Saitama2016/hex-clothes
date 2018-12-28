import React from 'react';
import {connect} from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';
import { changeShoesColor } from '../../actions';

const flattenShoeColors = (groups) => {
    let arr = Object.keys(groups).map((group) =>
        Object.values(groups[group])
    )

    return arr[0];
}

const SelectShoesColor = ({ dispatch }) => {
    return (
        <CirclePicker 
            colors={flattenShoeColors(swatches.shoeColors)}
            onChange={ (color, event) => dispatch(changeShoesColor(color.hex))}
        />
    )
}

export default connect()(SelectShoesColor);