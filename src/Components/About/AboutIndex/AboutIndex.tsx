import React from "react";
import "./AboutIndex.css";
import AboutIndexItem from "../AboutIndexItem/AboutIndexItem";

function AboutIndex(): JSX.Element {
    const names: string[] = ["Rick", "Brett"];
    return (
        <div id="about-section" className="about-index-wrapper">
            <div className="about-index-container">
                <h1 className="about-title">
                    Meet The Band!
                </h1>
                {names.map((name: string, index: number) => (
                    <AboutIndexItem key={index} name={name} />
                ))}
            </div>
        </div>
    );
};
export default AboutIndex;