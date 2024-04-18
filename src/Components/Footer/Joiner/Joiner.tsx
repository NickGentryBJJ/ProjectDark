import React from 'react';
import './Joiner.css';
import Social from "../Social/Social"
import MobileTradeMarks from "../MobileTradeMarks/MobileTradeMarks"
import DesktopTrademarks from "../DesktopTrademarks/DesktopTrademarks"
import ContactButtons from "../ContactButtons/ContactButtons"

function Joiner(): JSX.Element {
    return (
        <footer id="contact-section">
            <div  className="footer-container">
                <div className="footer-wrapper">
                    <div className="foot-left">
                        <h1 className="foot-title">
                            Dark Nesesities
                        </h1>                   
                        <span className="last-words-footer">
                            Thank you for visiting!
                        </span>
                        <Social/>
                        <MobileTradeMarks/>        
                    </div>
                    <div className="foot-right">
                        <ContactButtons/>
                        <DesktopTrademarks/>
                    </div>
                </div>
            </div>
        </footer>     
    );
};
export default Joiner;