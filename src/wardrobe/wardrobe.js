import React from 'react';
import './wardrobe.css';

class Wardrobe extends React.Component {
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
            shoe: {
               color: "black",
               style: "shoes"
            },
        }
        
        this.changeShirt = this.changeShirt.bind(this);
        this.changePants = this.changePants.bind(this);
        this.removeShoes = this.removeShoes.bind(this);
    }

    /*
    Create object to store complimentary colors for skintones
    Ex: Pale Pink = cool colors: blues, greens, pinks, purples, and reds for shirts
    */

    changeShirt(event) {
        this.setState({ shirt: event.target.value })
        if (event.target.value === "tank-top") {
            this.refs.leftShortSleeve.style.visibility = "hidden";
            this.refs.rightShortSleeve.style.visibility = "hidden";
        }
        if (event.target.value === "t-shirt") {
            this.refs.leftShortSleeve.style.visibility = "visible";
            this.refs.rightShortSleeve.style.visibility = "visible";
        }
    }

    changePants(event) {
        this.setState({ pants: event.target.value });
        if (event.target.value === "khakis") {
            this.refs.waist.style.backgroundColor = "khaki";
            this.refs.leftLeg.style.backgroundColor = "khaki";
            this.refs.rightLeg.style.backgroundColor = "khaki";
        } else if (event.target.value === "jeans") {
            this.refs.waist.style.backgroundColor = "#1560BD";
            this.refs.leftLeg.style.backgroundColor = "#1560BD";
            this.refs.rightLeg.style.backgroundColor = "#1560BD";
        } else if (event.target.value === "chinos") {
            this.refs.waist.style.backgroundColor = "grey";
            this.refs.leftLeg.style.backgroundColor = "grey";
            this.refs.rightLeg.style.backgroundColor = "grey";
        } else if (event.target.value === "dress-pants") {
            this.refs.waist.style.backgroundColor = "#000";
            this.refs.leftLeg.style.backgroundColor = "#000";
            this.refs.rightLeg.style.backgroundColor = "#000";
        }
    }

    removeShoes(event) {
        // const newState = Object.assign({ style: event.target.value }, this.state.shoe);
        this.setState({ shoe: event.target.value });
        if (event.target.value === "no-shoes") {
            console.log(this.refs.head.style.backgroundColor);
            this.refs.Lshoe.style.backgroundColor = "#C68642";
            this.refs.Rshoe.style.backgroundColor = "#C68642";
        }
        if (event.target.value === "shoes") {
            this.refs.Lshoe.style.backgroundColor = "black";
            this.refs.Rshoe.style.backgroundColor = "black";
        }
    }

    render() {
    return (
        <div>
            <h3>Create your Outfit</h3>
            <section>
                <div className="user" >
                    {/* Have body parts be same skin color */}
                    <div className="person" id="person">
                        <div className="head" ref="head"></div>
                        <div className="body">
                          <div className="top"></div>
                          <div className="collar"></div>
                          <div className="left-arm">
                            <div className="left-hand"></div>
                          </div>
                          <div className="right-arm">
                            <div className="right-hand"></div>
                          </div>
                          <div className="shirt" ref="shirt">
                            <div className="buttons">
                              <div className="button"></div>
                              <div className="button"></div>
                              <div className="button"></div>
                            </div>
                            <div className="left-short-sleeve" ref="leftShortSleeve"></div>
                            <div className="right-short-sleeve" ref="rightShortSleeve"></div>
                          </div>
                        </div>
                        <div className="waist" ref="waist"></div>
                        <div className="legs">
                          <div className="leg left" ref="leftLeg">
                            <div className="shoe" ref="Lshoe"></div>
                          </div>
                          <div className="leg right" ref="rightLeg">
                            <div className="shoe" ref="Rshoe"></div>
                          </div>
                        </div>
                    </div>
                </div>
                <br />
                <form style={{margin: "10px 0px 0px 0px"}}>
                <label>
                    <select value={this.state.shirt} onChange={this.changeShirt}>
                        <option>Select Shirt</option>
                        <option value="t-shirt">T-shirt</option>
                        <option value="button-shirt">Button Shirt</option>
                        <option value="tank-top">Tank Top</option>
                    </select>

                    <select value={this.state.pants} onChange={this.changePants}>
                        <option>Select Pants</option>
                        <option value="jeans">Jeans</option>
                        <option value="chinos">Chinos</option>
                        <option value="khakis">Khakis</option>
                        <option value="dress-pants">Dress Pants</option>
                    </select>

                    <select value={this.state.shoe} onChange={this.removeShoes}>
                        <option>Select Shoes</option>
                        <option value="shoes">Shoes</option>
                        <option value="no-shoes">No Shoes</option>
                    </select>
                </label>
            </form>
            </section>
            <h3>Checkout your previous Outfits</h3>
            <section>
                <p>[Placeholder for outfit log]</p>
                <p>[Option to edit or delete outfit]</p>
            </section>
        </div>
    );
    }
}
export default Wardrobe;