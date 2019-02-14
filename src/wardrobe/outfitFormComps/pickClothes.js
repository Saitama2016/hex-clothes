import React from 'react';
import {connect} from 'react-redux';
import SelectShirtType from './selectShirtType';
import SelectShirtColor from './selectShirtColor';
import SelectPantsType from './selectPantsType';
import SelectPantsColor from './selectPantsColor';
import SelectShoesColor from './selectShoesColor';

const ClothesPicker = () => {
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
                <SelectShirtType />
                {/* Customize colors for Skintones and reset color when Skintone changes */}
                <div style = { center }>
                {/* Colors will be based on skin tone */}
                <SelectShirtColor
                />
                </div>
            {/* Include Pants Components */}
                <SelectPantsType />

                <div style = { center }>
                <SelectPantsColor />
                </div>
                {/* Include Shoes Component */}
                <label>Select Shoe Color:</label>
                <div style = { center }>
                <SelectShoesColor />
                </div>
            </div>
        );
}

export default connect()(ClothesPicker);