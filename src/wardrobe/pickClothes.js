import React from 'react';
import './pickClothes.css';

class PickClothes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            shirt: {
               color: "white",
               style: "t-shirt"
            },
            pants: {
               color: "#1560BD",
               style: "jeans"
            },
            shoes: {
               color: "black",
               style: "shoes"
            },
        }
        
        this.changeShirt = this.changeShirt.bind(this);
    }

    /*
    Create object to store complimentary colors for skintones
    Ex: Pale Pink = cool colors: blues, greens, pinks, purples, and reds for shirts
    */

    changeShirt(event) {
        const newState = Object.assign({ style: event.target.value }, this.state.shirt);
        this.setState({ shirt: newState})
        alert(event.target.value);
        // this.refs.user.style.color = event.target.value;
    }

    render() {
        return (
            <form style={{margin: "10px 0px 0px 0px"}}>
                <label>
                    <select value={this.state.shirt} onChange={this.changeShirt}>
                        <option value="t-shirt">T-shirt</option>
                        <option value="button-shirt">Button Shirt</option>
                        <option value="tank-top">Tank Top</option>
                    </select>

                    <select>
                        <option value="jeans">Jeans</option>
                        <option value="chinos">Chinos</option>
                        <option value="khakis">Khakis</option>
                        <option value="dress-pants">Dress Pants</option>
                    </select>

                    <select>
                        <option value="shoes">Shoes</option>
                        <option value="no-shoes">No Shoes</option>
                    </select>
                </label>
            </form>
        );
    }
}

export default PickClothes;