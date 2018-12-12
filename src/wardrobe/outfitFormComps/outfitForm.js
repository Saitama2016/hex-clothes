import React from 'react';
import ClothesPicker from './pickClothes';
import {connect} from 'react-redux';
import { SelectSkintone } from './skintones';

export class OutFitForm extends React.Component {
    onSubmit(event) {
        event.preventDefault();
    }

    render () {
        return (
            <form style={{margin: "10px 0px 0px 0px"}} onSubmit={handleSubmit}>
                <label>Select Skintone:</label>
                <SelectSkintone 
                    onChange = {this.showForm}
                />

                {this.state.showForm && 
                <ClothesPicker
                    skintone='Select Skintone'
                    colorClothes = {colorClothes}
                    pantsColor = {pantsColor}
                    showLongSleeve = {showLongSleeve}
                    showShortSleeve = {showShortSleeve}
                    onChange={this.openForm}
                    onChangeShirtColor={this.onChangeShirtColor}
                    onPantsColorChange={this.changePantsColors}
                    onHideSleeves={this.hideSleeves}
                    />}
            <br />
            <button 
                type="submit"
                className="modelSubmit"
            >
                Submit
                </button>
            </form>
        );
    }
}

export default connect ()(OutFitForm);