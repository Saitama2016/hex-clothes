import React from 'react';
import './wardrobe.css';

class Wardrobe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skintone: '#E0AC68',
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
        
        this.changeSkintone = this.changeSkintone.bind(this);
        this.changeShirt = this.changeShirt.bind(this);
        this.changePants = this.changePants.bind(this);
        this.removeShoes = this.removeShoes.bind(this);
    }

    /*
    Create object to store complimentary colors for skintones
    Ex: Pale Pink = cool colors: blues, greens, pinks, purples, and reds for shirts
    */

    /* Include skintone function in wardrobe */

    changeSkintone(event) {
        this.setState({skintone: event.target.value});
        console.log(event.target.value);
        console.log(this.refs);
        // console.log(this.refs.head.style.color);
        Object.keys(this.refs).filter(function(r) { 
           return /(head|neck|arm|hand)/i.test(r)
        }).forEach( function(ref) {
            this.refs[ref].style.backgroundColor = event.target.value;
        }.bind(this));
    }

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
                        <div className="head" ref="head">
                            <div className="neck" ref="neck"></div>
                        </div>
                        <div className="body">
                          <div className="top"></div>
                          <div className="collar"></div>
                          <div className="left-arm" ref="leftArm">
                            <div className="left-hand" ref="leftHand"></div>
                          </div>
                          <div className="right-arm" ref="rightArm">
                            <div className="right-hand" ref="rightHand"></div>
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
                    <select value={this.state.skintone}  onChange={this.changeSkintone}>
                        <option value="#260701" style={{background: "#260701", color: "#FFF"}}>Root Beer</option>
                        <option value="#3D0C02" style={{background: "#3D0C02", color: "#FFF"}}>Black Bean</option>
                        <option value="#843722" style={{background: "#843722", color: "#FFF"}}>Burnt Umber</option>
                        <option value="#8D5524" style={{background: "#8D5524", color: "#FFF"}}>Russet</option>
                        <option value="#C68642" style={{background: "#C68642", color: "#FFF"}}>Peru</option>
                        <option value="#9F5C3C" style={{background: "#9F5C3C", color: "#FFF"}}>Coconut</option>
                        <option value="#AF6E51" style={{background: "#AF6E51", color: "#000"}}>Brown Sugar</option>
                        <option value="#C18566" style={{background: "#C18566", color: "#000"}}>Deer</option>
                        <option value="#C69076" style={{background: "#C69076", color: "#000"}}>Antique Brass</option>
                        <option value="#D3A186" style={{background: "#D3A186", color: "#000"}}>Tumbleweed</option>
                        <option value="#E2A898" style={{background: "#E2A898", color: "#000"}}>Pastel Pink</option>
                        <option value="#F0BEAF" style={{background: "#F0BEAF", color: "#000"}}>Desert Sand</option>
                        <option value="#F6D3BD" style={{background: "#F6D3BD", color: "#000"}}>Pale Pink</option>
                        <option value="#E0AC69" style={{background: "#E0AC69"}}>Fawn</option>
                        <option value="#F1C27D" style={{background: "#F1C27D"}}>Mellow Apricot</option>
                        <option value="#FFDBAC" style={{background: "#FFDBAC"}}>Navajo White</option>
                    </select>

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