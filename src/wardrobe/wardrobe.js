import React from 'react';
import './wardrobe.css';
import Model from './model';
import Skintones from './skintone';

class Wardrobe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skintone: "#C68642",
            colorClothes: "#FFF",
            pantsColor: "#1560BD",
            shoesColor: "#000"
        }

        this.changeSkintone = this.changeSkintone.bind(this);
    }

    changeSkintone(newSkintone) {
        this.setState({skintone: newSkintone});
    }

    render() {
        const skintone = this.state.skintone;
    return (
        <div>
            <h3>Create your Outfit</h3>
            <section>
                <Model
                    skintone = {skintone}
                    />
                <br />
                <Skintones 
                    skintone = {skintone}
                    onSkintoneChange={this.changeSkintone}
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