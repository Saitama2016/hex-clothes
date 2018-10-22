import React, { Component } from 'react';

class Model extends Component {
    constructor(props) {
        super(props);
            this.state= {
                skintone: "#C68642",
                colorClothes: "#FFF",
                pantsColor: "#1560BD",
                shoesColor: "#000"
        }
}

    
    render () {
        const skintone = this.props.skintone;

        return (
        <div className="user" >
        <div className="person" id="person">
            <div className="head" style={{backgroundColor: skintone}}>
                <div className="neck" style={{backgroundColor: skintone}}></div>
            </div>
            <div className="body" style={{backgroundColor: skintone}}>
              <div className="top" style={{backgroundColor: skintone}}></div>
              <div className="collar" style={{backgroundColor: this.state.colorClothes}}></div>
              <div className="left-arm" style={{backgroundColor: skintone}}>
                <div className="left-hand" style={{backgroundColor: skintone}}></div>
              </div>
              <div className="right-arm" style={{backgroundColor: skintone}}>
                <div className="right-hand" style={{backgroundColor: skintone}}></div>
              </div>
              <div className="shirt" style={{backgroundColor: this.state.colorClothes}}>
                <div className="left-short-sleeve" style={{backgroundColor: this.state.colorClothes}}></div>
                <div className="left-long-sleeve" style={{backgroundColor: this.state.colorClothes}}></div>
                <div className="right-long-sleeve" style={{backgroundColor: this.state.colorClothes}}></div>
                <div className="right-short-sleeve" style={{backgroundColor: this.state.colorClothes}}></div>
              </div>
            </div>
            <div className="waist" style={{backgroundColor: this.state.pantsColor}}></div>
            <div className="legs">
              <div className="leg left" style={{backgroundColor: this.state.pantsColor}}>
                <div className="foot" style={{backgroundColor: skintone}}></div>
                <div className="shoe" style={{backgroundColor: this.state.shoesColor}}></div>
              </div>
              <div className="leg right" style={{backgroundColor: this.state.pantsColor}}>
                <div className="foot" style={{backgroundColor: skintone}}></div>
                <div className="shoe" style={{backgroundColor: this.state.shoesColor}}></div>
              </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Model;