import React from 'react';
import {connect} from 'react-redux';

export function SelectColorShirt(props) {

        return (
            <div>
                <select value={props.colorClothes}>
                    <option value="white">Select Color Shirt</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="gold">Gold</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                </select>
            </div>
        );
}

const mapStateToProps = state => ({
    colorClothes: state.colorClothes
})

export default connect(mapStateToProps)(SelectColorShirt);