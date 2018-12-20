import React from 'react';
import { Circle } from 'react-color';
import SelectColorShirt from './selectShirtColor';
import {connect} from 'react-redux';

export class ClothesPicker extends React.Component {
    render () {
        const center = {
            width: "240px",
            display: "flex",
            margin: "20px auto",
            alignItems: "center",
            justifyContent: "center",
            touchAction: "none"
        }

        return (
            <div className="clothingOptions">
                <select>
                    <option value="long-sleeve-shirt">Long Sleeve Shirt</option>
                    <option value="t-shirt">T-shirt</option>
                    <option value="tank-top">Tank Top</option>
                </select>
                {/* Customize colors for Skintones and reset color when Skintone changes */}
                <div style = { center }>
                {/* Colors will be based on skin tone */}
                <SelectColorShirt
                />
                </div>
            {/* Include Pants Components */}

                <select value="jeans">
                    <option value="jeans">Jeans</option>
                    <option value="chinos">Chinos</option>
                    <option value="khakis">Khakis</option>
                    <option value="dress-pants">Dress Pants</option>
                </select>

                <div style = { center }>
                <Circle 
                />
                </div>
                {/* Include Shoes Component */}

                <select value="shoes">
                    <option value="shoes">Shoes</option>
                    <option value="no-shoes">No Shoes</option>
                </select>
            </div>
        );
    }
}


export default connect(ClothesPicker);