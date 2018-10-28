import React from 'react';
import { ChromePicker } from 'react-color';
import {connect} from 'react-redux';

class ClothesPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorClothes: "#FFF",
            pantsColor: "#1560BD",
            showLongSleeve: "visible",
            showShortSleeve: "visible",
            shirtType: "long-sleeve-shirt"
        }

        this.changeShirt = this.changeShirt.bind(this);
        this.changePants = this.changePants.bind(this);
        this.removeShoes = this.removeShoes.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.colorPants = this.colorPants.bind(this);
    }

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

    handleChangeComplete = (color) => {
        this.setState({ colorClothes: color.hex });
        this.props.onColorClothesChange(this.state.colorClothes = color.hex);
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
                <ChromePicker
                    color = {colorClothes}
                    onChangeComplete={this.handleChangeComplete}
                />
                </div>
            {/* Include Color Picker */}

                <select value="jeans" onChange={this.changePants}>
                    <option value="jeans">Jeans</option>
                    <option value="chinos">Chinos</option>
                    <option value="khakis">Khakis</option>
                    <option value="dress-pants">Dress Pants</option>
                </select>

                <div style = { center }>
                <ChromePicker 
                    color = {pantsColor}
                    onChangeComplete={this.colorPants}
                />
                </div>
                {/* Include Color Picker */}

                <select value="shoes" onChange={this.removeShoes}>
                    <option value="shoes">Shoes</option>
                    <option value="no-shoes">No Shoes</option>
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pantsColor: state.pantsColor,
        colorClothes: state.colorClothes
    }
}

export default connect(mapStateToProps)(ClothesPicker);