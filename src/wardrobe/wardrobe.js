import React from 'react';
import './wardrobe.css';
import Model from './model';
import Skintones from './outfitFormComps/outfitForm';

class Wardrobe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skintone: "#C68642",
            colorClothes: "#FFF",
            pantsColor: "#1560BD",
            shoesColor: "#000",
            showLongSleeve: "visible",
            showShortSleeve: "visible"
        }

        this.changeSkintone = this.changeSkintone.bind(this);
        this.onChangeShirtColor = this.onChangeShirtColor.bind(this);
        this.changePantsColor =  this.changePantsColor.bind(this);
        this.hideSleeves = this.hideSleeves.bind(this);
    }

    changeSkintone(newSkintone) {
        this.setState({skintone: newSkintone});
    }

    onChangeShirtColor(newColorClothes) {
        this.setState({colorClothes: newColorClothes});
    }

    changePantsColor(newPantsColor) {
        this.setState({pantsColor: newPantsColor});
    }

    hideSleeves(hiddenSleeves) {
        this.setState({showLongSleeve: hiddenSleeves}); 
        this.setState({showShortSleeve: hiddenSleeves});
    }

    render() {
        const skintone = this.state.skintone;
        const colorClothes = this.state.colorClothes;
        const pantsColor = this.state.pantsColor;
        const shoesColor = this.state.shoesColor;
        const showLongSleeve = this.state.showLongSleeve;
        const showShortSleeve = this.state.showShortSleeve;

    return (
        <div>
            <h3>Create your Outfit</h3>
            <section>
                <Model
                    skintone = {skintone}
                    colorClothes = {colorClothes}
                    pantsColor = {pantsColor}
                    shoesColor = {shoesColor}
                    showLongSleeve = {showLongSleeve}
                    showShortSleeve = {showShortSleeve}
                    />
                <br />
                <Skintones 
                    skintone = {skintone}
                    colorClothes = {colorClothes}
                    pantsColor = {pantsColor}
                    shoesColor = {shoesColor}
                    showLongSleeve = {showLongSleeve}
                    showShortSleeve = {showShortSleeve}
                    onSkintoneChange={this.changeSkintone}
                    onChangeShirtColor={this.onChangeShirtColor}
                    onPantsColorChange={this.changePantsColor}
                    onHideSleeves={this.hideSleeves}
                />
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