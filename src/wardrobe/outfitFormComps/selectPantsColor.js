import React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';
import swatches from '../../colors';
import { changePantsColor } from '../../actions/createOutfits';

// const flattenPantsColors = (groups) => {
//     let arr = Object.keys(groups).map((group) => 
//         Object.values(groups[group])
//     )

//     return arr[1]
// }

const SelectPantsColor = ({ pantsType, dispatch }) => {

    const flattenPantsColors = (groups) => {
        let arr = Object.keys(groups).map((group) => 
            Object.values(groups[group])
        )

        if (pantsType === 'jeans') {
            return arr[0]
        } else if (pantsType === 'khakis') {
            return arr[1]
        } else if (pantsType === 'chinos') {
            return arr[2]
        } else if (pantsType === 'dress-pants') {
            return arr[3]
        } else {
            return arr[0]
        }
    }


    return (
        <div>
            <CirclePicker
                colors={flattenPantsColors(swatches.pantsColors)}
                onChange={ (color, event) => dispatch(changePantsColor(color.hex))} 
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    pantsType: state.outfitReducer.pantsType,
    pantsColor: state.outfitReducer.pantsColor,
})

export default connect(mapStateToProps)(SelectPantsColor)