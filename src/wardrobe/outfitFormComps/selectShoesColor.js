import React from 'react';
import {connect} from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';

const flattenShoeColors = (groups) => {
    let arr = Object.keys(groups).map((group) =>
        Object.values(groups[group])
    )

    return arr[0];
}

const SelectShoesColor = () => {
    return (
        <CirclePicker 
            colors={flattenShoeColors(swatches.shoeColors)}
        />
    )
}

export default connect()(SelectShoesColor);