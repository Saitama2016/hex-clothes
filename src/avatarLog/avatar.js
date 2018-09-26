import React from 'react';
import './avatar.css';

export default function Avatar() {
    return (
        <div>
            <h3>Build your Avatar!</h3>
            <form>
                <label><select>
                    <option>---Choose Skintone---</option>
                    <option value="" style={{background: "#260701", color: "#FFF"}}>Root Beer</option>
                    <option value="" style={{background: "#3D0C02", color: "#FFF"}}>Black Bean</option>
                    <option value="" style={{background: "#843722", color: "#FFF"}}>Burnt Umber</option>
                    <option value="" style={{background: "#8D5524", color: "#FFF"}}>Russet</option>
                    <option value="" style={{background: "#C68642", color: "#FFF"}}>Peru</option>
                    <option value="" style={{background: "#9F5C3C", color: "#FFF"}}>Coconut</option>
                    <option value="" style={{background: "#AF6E51", color: "#000"}}>Brown Sugar</option>
                    <option value="" style={{background: "#C18566", color: "#000"}}>Deer</option>
                    <option value="" style={{background: "#C69076", color: "#000"}}>Antique Brass</option>
                    <option value="" style={{background: "#D3A186", color: "#000"}}>Tumbleweed</option>
                    <option value="" style={{background: "#E2A898", color: "#000"}}>Pastel Pink</option>
                    <option value="" style={{background: "#F0BEAF", color: "#000"}}>Desert Sand</option>
                    <option value="" style={{background: "#F6D3BD", color: "#000"}}>Pale Pink</option>
                    <option value="" style={{background: "#E0AC69"}}>Fawn</option>
                    <option value="" style={{background: "#F1C27D"}}>Mellow Apricot</option>
                    <option value="" style={{background: "#FFDBAC"}}>Navajo White</option>
                </select></label>
                <br />
                <div><i className="fas fa-user fa-4x" style={{color: "#000"}}></i></div>
            </form>
        </div>
    );
}