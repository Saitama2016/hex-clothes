import React from 'react';
import ClothesPicker from './pickClothes';
import {connect} from 'react-redux';

class Skintones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skintone: "Select Skintone",
            colorClothes: "#FFF",
            pantsColor: "#1560BD",
            showLongSleeve: "visible",
            showShortSleeve: "visible",
            showForm: false
        }

        this.openForm = this.openForm.bind(this);
        this.changeColorClothes = this.changeColorClothes.bind(this);
        this.changePantsColors = this.changePantsColors.bind(this);
        this.hideSleeves = this.hideSleeves.bind(this);
    }



    openForm(event) {
        this.setState({skintone: event.target.value});
        if (event.target.value === 'Select Skintone') {
            this.setState({showForm: false});
            this.props.onSkintoneChange(this.state.skintone = '#C68642');
            console.log('Hide Clothing Form');
        } else {
            this.setState({showForm: true});
            this.props.onSkintoneChange(this.state.skintone = event.target.value);
            console.log('Show Form');
        }
    }

    changeColorClothes(newColorClothes) {
        this.setState({colorClothes: newColorClothes});
        this.props.onColorClothesChange(this.state.colorClothes);
    }

    changePantsColors(newPantsColor) {
        this.setState({pantsColor: newPantsColor});
        this.props.onPantsColorChange(this.state.pantsColor);
    }

    hideSleeves(hiddenSleeves) {
        this.setState({showLongSleeve: hiddenSleeves});
        this.setState({showShortSleeve: hiddenSleeves});
        this.props.onHideSleeves(this.state.showLongSleeve) 
        this.props.onHideSleeves(this.state.showShortSleeve);
    }


    render () {

        const skintone = this.props.skintone;
        const colorClothes = this.props.colorClothes;
        const pantsColor = this.props.pantsColor;
        const showLongSleeve = this.props.showLongSleeve;
        const showShortSleeve = this.props.showShortSleeve;

        return (
            <form style={{margin: "10px 0px 0px 0px"}}>
            <label>
                <select value={skintone}  onChange={this.openForm}>
                    <option value="Select Skintone">Select Skintone</option>
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

                {this.state.showForm && 
                <ClothesPicker
                    skintone='Select Skintone'
                    colorClothes = {colorClothes}
                    pantsColor = {pantsColor}
                    showLongSleeve = {showLongSleeve}
                    showShortSleeve = {showShortSleeve}
                    onChange={this.openForm}
                    onColorClothesChange={this.changeColorClothes}
                    onPantsColorChange={this.changePantsColors}
                    onHideSleeves={this.hideSleeves}
                    />}
            </label>
            <br />
            <button className="modelSubmit">Submit</button>
            </form>
        );
    }
}

export default Skintones;