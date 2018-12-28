import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';
import { changePantsColor } from '../../actions';

const flattenPantsColors = (groups) => {
    let arr = Object.keys(groups).map((group) => 
        Object.values(groups[group])
    )

    return arr[0]
}

const SelectPantsColor = ({ dispatch }) => {
    return (
        <div>
            <CirclePicker
                colors={flattenPantsColors(swatches.pantsColors)}
                onChange={ (color, event) => dispatch(changePantsColor(color.hex))} 
            />
        </div>
    )
}

export default connect()(SelectPantsColor)