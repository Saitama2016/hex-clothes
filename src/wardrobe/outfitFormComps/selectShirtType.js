import React from 'react'
import {connect} from 'react-redux';

const SelectShirtType = () => {
    return (
        <div>
            <label>Select Type of Shirt:</label>
            <select>
                <option value="long-sleeve-shirt">Long Sleeve Shirt</option>
                <option value="t-shirt">T-shirt</option>
                <option value="tank-top">Tank Top</option>
            </select>
        </div>
    )
}

export default connect()(SelectShirtType);