import React from 'react';
import {connect} from 'react-redux';


const  Model = (props) => {
  // Model inspired by "Css man" from Susanne Karin Lundblad
        return (
        <div className="user" >
        <div className="person" id="person">
            <div className="head" style={{backgroundColor: props.skintone}}>
                <div className="neck" style={{backgroundColor: props.skintone}}></div>
            </div>
            <div className="body" style={{backgroundColor: props.skintone}}>
              <div className="top" style={{backgroundColor: props.skintone}}></div>
              <div className="collar" style={{backgroundColor: props.shirtColor}}></div>
              <div className="left-arm" style={{backgroundColor: props.skintone}}>
                <div className="left-hand" style={{backgroundColor: props.skintone}}></div>
              </div>
              <div className="right-arm" style={{backgroundColor: props.skintone}}>
                <div className="right-hand" style={{backgroundColor: props.skintone}}></div>
              </div>
              <div className="shirt" style={{backgroundColor: props.shirtColor}}>
                <div className="left-short-sleeve" style={{backgroundColor: props.shirtColor, visibility: props.shortSleeveVisibility}}></div>
                <div className="left-long-sleeve" style={{backgroundColor: props.shirtColor, visibility: props.longSleeveVisibility}}></div>
                <div className="right-long-sleeve" style={{backgroundColor: props.shirtColor, visibility: props.longSleeveVisibility}}></div>
                <div className="right-short-sleeve" style={{backgroundColor: props.shirtColor, visibility: props.shortSleeveVisibility}}></div>
              </div>
            </div>
            <div className="waist" style={{backgroundColor: props.pantsColor}}></div>
            <div className="legs">
              <div className="leg left" style={{backgroundColor: props.pantsColor}}>
                <div className="foot" style={{backgroundColor: props.skintone}}></div>
                <div className="shoe" style={{backgroundColor: props.shoesColor}}></div>
              </div>
              <div className="leg right" style={{backgroundColor: props.pantsColor}}>
                <div className="foot" style={{backgroundColor: props.skintone}}></div>
                <div className="shoe" style={{backgroundColor: props.shoesColor}}></div>
              </div>
            </div>
        </div>
    </div>
        );
}

const mapStateToProps = state => {
  return {
    skintone: state.outfitReducer.skintone,
    shirtColor: state.outfitReducer.shirtColor,
    shirtType: state.outfitReducer.shirtType,
    shortSleeveVisibility: state.outfitReducer.shortSleeveVisibility,
    longSleeveVisibility: state.outfitReducer.longSleeveVisibility,
    pantsColor: state.outfitReducer.pantsColor,
    pantsType: state.outfitReducer.pantsType,
    shoesColor: state.outfitReducer.shoesColor
  }
}

export default connect(mapStateToProps)(Model);