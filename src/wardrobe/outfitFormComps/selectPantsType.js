import React from 'react'
import {connect} from 'react-redux';

const SelectPantsType = () => {
    return (
        <div>
            <label>Select Type of Pants:</label>
            <select value="jeans">
                <option value="jeans">Jeans</option>
                <option value="chinos">Chinos</option>
                <option value="khakis">Khakis</option>
                <option value="dress-pants">Dress Pants</option>
            </select>
        </div>
    )
}

export default connect()(SelectPantsType);