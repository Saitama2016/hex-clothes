import React from 'react';
import { ChromePicker } from 'react-color';

class ClothesPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorClothes: "#FFF",
            pantsColor: "#1560BD"
        }

        this.changeShirt = this.changeShirt.bind(this);
        this.changePants = this.changePants.bind(this);
        this.removeShoes = this.removeShoes.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
        this.colorPants = this.colorPants.bind(this);
    }

    changeShirt(event) {
        this.setState({ colorClothes: event.target.value });
    }

    changePants(event) {
        this.setState({ pants: event.target.value });
    }

    removeShoes(event) {
        // const newState = Object.assign({ style: event.target.value }, this.state.shoe);
        this.setState({ shoe: event.target.value });
        if (event.target.value === "no-shoes") {
            console.log(this.refs.head.style.backgroundColor);
        }
    }

    handleChangeComplete = (color) => {
        this.setState({ colorClothes: color.hex });
    };

    colorPants = (color) => {
        this.setState({ pantsColor: color.hex });
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

        const pantsColor = this.state.pantsColor;
        const colorClothes = this.state.colorClothes;

        return (
            <div className="clothingOptions">
                <select value="long-sleeve-shirt" onChange={this.changeShirt}>
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

export default ClothesPicker;