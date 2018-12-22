import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';

const flattenPantsColors = (groups) => {
    let arr = Object.keys(groups).map((group) => 
        Object.values(groups[group])
    )

    return arr[0]
}

const SelectPantsColor = () => {
    return (
        <div>
            <CirclePicker
                colors={flattenPantsColors(swatches.pantsColors)} 
            />
        </div>
    )
}

export default connect()(SelectPantsColor)