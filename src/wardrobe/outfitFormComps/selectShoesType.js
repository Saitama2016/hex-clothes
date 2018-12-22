import React from 'react'
import {connect} from 'react-redux';

const SelectShoesType = () => {
    return (
        <div>
            <label>Select Type Of Shoes:</label>
            <select value="shoes">
                <option value="shoes">Shoes</option>
                <option value="no-shoes">No Shoes</option>
            </select>
        </div>
    )
}

export default connect()(SelectShoesType);