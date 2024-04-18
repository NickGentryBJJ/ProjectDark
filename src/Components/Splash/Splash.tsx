import React from "react";
import './Splash.css';
import logo from "../../images/band_icon.png"

function Splash(): JSX.Element {
    return (
        <div className="top">
            <img className="logo" src={logo} alt="Dark Necessities"/>       
        </div>
    )
}
export default Splash;