import React from 'react';
import {connect} from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';
import { changeShirtColor } from '../../actions/createOutfits';

const SelectShirtColor = ({skintone, dispatch}) => {
    let selectedGroup;

    const flattenShirtColors = (groups) => {

        Object.keys(swatches.skintones).some(function (group) {
           return Object.keys(swatches.skintones[group]).some(function (color) {
                if (skintone === swatches.skintones[group][color]) {
                    selectedGroup = group
                    return true
                } else {
                    return false
                }
            })
        })

        let arr = Object.keys(groups).map((group) => 
            Object.values(groups[group])
        )

        if (selectedGroup === "group1") {
            return arr[0]
        } else if (selectedGroup === "group2") {
            return arr[1]
        } else if (selectedGroup === "group3") {
            return arr[2]
        } else {
            return arr[0]
        }
    }
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
})

export default connect(mapStateToProps)(SelectShirtColor);