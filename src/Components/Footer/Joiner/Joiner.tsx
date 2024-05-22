import React from 'react';
import './Joiner.css';
import Social from "../Social/Social";
import MobileTradeMarks from "../MobileTradeMarks/MobileTradeMarks";
import DesktopTrademarks from "../DesktopTrademarks/DesktopTrademarks";
import ContactButtons from "../ContactButtons/ContactButtons";
import bandIcon from '../../../images/Band Photos/Logos/Pepper.png';

function Joiner(): JSX.Element {
    return (
        <footer id="contact-section">
            <div  className="footer-container">
                <div className="footer-wrapper">
                    <div className="foot-left">
                        <img className='foot-band-icon' src={bandIcon} alt="" />                 
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