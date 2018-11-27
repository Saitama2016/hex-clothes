import React from 'react';

export function SelectSkintone(props) {

    return (
        <div>
            <select value={props.skintone}  onChange={props.openForm}>
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
        </div>
    )
}

const mapStateToProps = state => ({
    skintone: state.skintone
})

export default connect(mapStateToProps)(SelectSkintone);