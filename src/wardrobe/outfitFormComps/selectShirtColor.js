import React from 'react';
import {connect} from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';
import { changeShirtColor } from '../../actions';

const flattenShirtColors = (groups) => {
    let arr = Object.keys(groups).map((group) => 
        Object.values(groups[group])
    )

    return arr[0]
}

const SelectShirtColor = ({ dispatch }) => {

        return (
            <div>
                <CirclePicker 
                colors={flattenShirtColors(swatches.shirtColors)}
                onChange={ (color, event) => dispatch(changeShirtColor(color.hex)) }
                />
            </div>
        );
}

const mapStateToProps = state => ({
    clothes: state.clothes
})

export default connect(mapStateToProps)(SelectShirtColor);