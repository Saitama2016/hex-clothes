import React from 'react';
import {connect} from 'react-redux';


const  Model = (props) => {

        return (
        <div className="user" >
        <div className="person" id="person">
            <div className="head" style={{backgroundColor: props.skintone}}>
                <div className="neck" style={{backgroundColor: props.skintone}}></div>
            </div>
            <div className="body" style={{backgroundColor: props.skintone}}>
              <div className="top" style={{backgroundColor: props.skintone}}></div>
              <div className="collar" style={{backgroundColor: props.clothes.shirt.color}}></div>
              <div className="left-arm" style={{backgroundColor: props.skintone}}>
                <div className="left-hand" style={{backgroundColor: props.skintone}}></div>
              </div>
              <div className="right-arm" style={{backgroundColor: props.skintone}}>
                <div className="right-hand" style={{backgroundColor: props.skintone}}></div>
              </div>
              <div className="shirt" style={{backgroundColor: props.clothes.shirt.color}}>
                <div className="left-short-sleeve" style={{backgroundColor: props.clothes.shirt.color, visibility: props.clothes.shirt.shortSleeveVisibility}}></div>
                <div className="left-long-sleeve" style={{backgroundColor: props.clothes.shirt.color, visibility: props.clothes.shirt.longSleeveVisibility}}></div>
                <div className="right-long-sleeve" style={{backgroundColor: props.clothes.shirt.color, visibility: props.clothes.shirt.longSleeveVisibility}}></div>
                <div className="right-short-sleeve" style={{backgroundColor: props.clothes.shirt.color, visibility: props.clothes.shirt.shortSleeveVisibility}}></div>
              </div>
            </div>
            <div className="waist" style={{backgroundColor: props.clothes.pants.color}}></div>
            <div className="legs">
              <div className="leg left" style={{backgroundColor: props.clothes.pants.color}}>
                <div className="foot" style={{backgroundColor: props.skintone}}></div>
                <div className="shoe" style={{backgroundColor: props.clothes.shoes.color}}></div>
              </div>
              <div className="leg right" style={{backgroundColor: props.clothes.pants.color}}>
                <div className="foot" style={{backgroundColor: props.skintone}}></div>
                <div className="shoe" style={{backgroundColor: props.clothes.shoes.color}}></div>
              </div>
            </div>
        </div>
    </div>
        );
}

const mapStateToProps = state => {
  return {
    skintone: state.skintone,
    clothes: state.clothes
  }
}

export default connect(mapStateToProps)(Model);