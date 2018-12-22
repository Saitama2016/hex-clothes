import React from 'react';
import {connect} from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';

const flattenShirtColors = (groups) => {
    let arr = Object.keys(groups).map((group) => 
        Object.values(groups[group])
    )

    return arr[0]
}

const SelectShirtColor = (props) => {

        return (
            <div>
                <CirclePicker 
                colors={flattenShirtColors(swatches.shirtColors)}
                />
            </div>
        );
}

const mapStateToProps = state => ({
    colorClothes: state.colorClothes
})

export default connect(mapStateToProps)(SelectShirtColor);