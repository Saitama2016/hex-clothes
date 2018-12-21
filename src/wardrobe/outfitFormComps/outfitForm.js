import React from 'react';
import ClothesPicker from './pickClothes';
import {connect} from 'react-redux';
import  SelectSkintone from './skintones';


const OutFitForm = () => {
        return (
            <form style={{margin: "10px 0px 0px 0px"}}>
                <label>Select Skintone:</label>
                <SelectSkintone 
                />

                <ClothesPicker
                    />
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


export default connect()(OutFitForm);