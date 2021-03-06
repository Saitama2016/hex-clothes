import React from 'react'
import {connect} from 'react-redux';
import { changePantsType } from '../../actions/createOutfits';

const SelectPantsType = ({ dispatch }) => {
    return (
        <div>
            <label>Select Type of Pants:</label>
            <select onChange={(event) => dispatch(changePantsType(event.target.value))}>
                <option value="jeans">Jeans</option>
                <option value="chinos">Chinos</option>
                <option value="khakis">Khakis</option>
                <option value="dress-pants">Dress Pants</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => ({
    pantsType: state.outfitReducer.pantsType
})

export default connect(mapStateToProps)(SelectPantsType);