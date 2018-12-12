import React from 'react';
import { Circle } from 'react-color';
import SelectColorShirt from './selectShirtColor';
import {connect} from 'react-redux';

export class ClothesPicker extends React.Component {

    changeShirt(event) {
        console.log(event.target.value);
        // Delay in updating state, use Redux!
        this.setState({ shirtType: event.target.value });
        if (event.target.value === "tank-top") {
            console.log("Hide sleeves");
            this.props.onHideSleeves(this.state.showLongSleeve = 'hidden');
            this.props.onHideSleeves(this.state.showShortSleeve = 'hidden');
        } else if (event.target.value === "t-shirt") {
            console.log("Show Short Sleeve");
            this.props.onHideSleeves(this.state.showLongSleeve = 'hidden');
            this.props.onHideSleeves(this.state.showShortSleeve = 'visible');
            console.log(this.state.showLongSleeve);
        } else if (event.target.value === "long-sleeve-shirt") {
            this.props.onHideSleeves(this.state.showLongSleeve = 'visible');
            this.props.onHideSleeves(this.state.showShortSleeve = 'visible');
        }
    }

    changePants(event) {
        this.setState({ pants: event.target.value });
    }

    removeShoes(event) {
        // const newState = Object.assign({ style: event.target.value }, this.state.shoe);
        this.setState({ shoe: event.target.value });
    }

    onChangeShirtColor(newColorClothes) {
        this.setState({colorClothes: newColorClothes});
        this.props.onChangeShirtColor(this.state.colorClothes);
    };

    colorPants = (color) => {
        this.setState({ pantsColor: color.hex });
        this.props.onPantsColorChange(this.state.pantsColor = color.hex);
    };


    render () {
        const center = {
            width: "240px",
            display: "flex",
            margin: "20px auto",
            alignItems: "center",
            justifyContent: "center",
            touchAction: "none"
        }

        const pantsColor = this.props.pantsColor;
        const colorClothes = this.props.colorClothes;

        return (
            <div className="clothingOptions">
                <select value={this.state.shirtType} onChange={this.changeShirt}>
                    <option value="long-sleeve-shirt">Long Sleeve Shirt</option>
                    <option value="t-shirt">T-shirt</option>
                    <option value="tank-top">Tank Top</option>
                </select>
                {/* Customize colors for Skintones and reset color when Skintone changes */}
                <div style = { center }>
                {/* Colors will be based on skin tone */}
                <SelectColorShirt
                    color = {colorClothes}
                    onChangeShirtColor={this.onChangeShirtColor}
                />
                </div>
            {/* Include Pants Components */}

                <select value="jeans" onChange={this.changePants}>
                    <option value="jeans">Jeans</option>
                    <option value="chinos">Chinos</option>
                    <option value="khakis">Khakis</option>
                    <option value="dress-pants">Dress Pants</option>
                </select>

                <div style = { center }>
                <Circle 
                    colors = {this.colors}
                />
                </div>
                {/* Include Shoes Component */}

                <select value="shoes" onChange={this.removeShoes}>
                    <option value="shoes">Shoes</option>
                    <option value="no-shoes">No Shoes</option>
                </select>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    colors: state.colors,
    shirtColor: state.clothes.shirt.color,
    shirtType: state.clothes.shirt.type,
    pantsColor: state.clothes.pants.color,
    pantsType: state.clothes.pants.type,
    shoesColor: state.clothes.shoes.color,
    shoesType: state.clothes.shoes.type,
    showLongSleeve: state.showLongSleeve,
    showShortSleeve: state.showShortSleeve,
})

export default connect(mapStateToProps)(ClothesPicker);