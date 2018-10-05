import React from 'react'
import './avatar.css';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {skintone: '#E0AC69'};

        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({skintone: event.target.value});
        console.log(event.target.value);
        console.log(this.refs.user.style.color);
        this.refs.user.style.color = event.target.value;
    }

    render() {
    return (
        <div>
            <h3>Select Your Skintone!</h3>
            <div><i id="user" ref="user" className="fas fa-user fa-4x"></i></div>
            <br />
            <form>
                <label>
                    <select value={this.state.skintone}  onChange={this.handleChange}>
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
                </label>
            </form>
        </div>
    );
    }
}

export default Avatar;