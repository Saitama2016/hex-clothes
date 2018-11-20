import React from 'react';

class SelectColorShirt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorClothes: "#FFF",
        }

        this.changeColorClothes = this.changeColorClothes.bind(this);
    }

        changeColorClothes(event) {
            this.setState({colorClothes: event.target.value});
        }

    render () {

        const colorClothes = this.props.colorClothes;

        return (
            <div>
                <select value={colorClothes}  onChange={this.changeColorClothes}>
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
}

export default SelectColorShirt;