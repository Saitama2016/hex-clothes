import React from 'react';
import {connect} from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';
import { changeShirtColor } from '../../actions';

const flattenShirtColors = (groups) => {
    let arr = Object.keys(groups).map((group) => 
        Object.values(groups[group])
    )
    return arr[1]
}

const SelectShirtColor = ({dispatch}) => {
    // const flattenShirtColors = (groups) => {
    //     console.log(props.skintone)
    //     let arr = Object.keys(groups).map((group) => 
    //         Object.values(groups[group])
    //     )
    //     if (props.skintone === "#ffdbac") {
    //         return arr[2]
    //     } else {
    //         return arr[0]
    //     }
    // }
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
    skintone: state.skintone,
    clothes: state.clothes
})

export default connect(mapStateToProps)(SelectShirtColor);