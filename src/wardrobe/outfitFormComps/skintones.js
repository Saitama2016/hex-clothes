import React, { Component } from 'react';
import { Circle } from 'react-color'
import { connect } from 'react-redux';
import swatches from '../../colors';

const flattenSkintones = (groups) => {
    let arr = Object.keys(groups).map((group) => 
      Object.values(groups[group]))
    let newArray = [].concat.apply([], arr);
    return newArray
}

const SelectSkintone = () => {
    
        return (
            <div>
                <Circle 
                    colors={flattenSkintones(swatches.skintones)}
                />
            </div>
        );    
}

const mapStateToProps = state => ({
    skintone: state.skintone
})

export default connect(mapStateToProps)(SelectSkintone);