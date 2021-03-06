import React from 'react'
import {connect} from 'react-redux';
import { changeShirtType } from '../../actions/createOutfits';

const SelectShirtType = ({ dispatch }) => {
    return (
        <div>
            <label>Select Type of Shirt:</label>
            <select onChange={(event) => dispatch(changeShirtType(event.target.value))}>
                <option value="long-sleeve-shirt">Long Sleeve Shirt</option>
                <option value="t-shirt">T-shirt</option>
                <option value="tank-top">Tank Top</option>
            </select>
        </div>
    )
}

export default connect()(SelectShirtType);