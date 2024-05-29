import React, { useEffect } from "react";
import './Media.css';
import splash from '../../images/splash.jpg';

function Media(): JSX.Element {

    return (
        <div id="media-section" className="media-wrap">
            <img className="main-img" src={splash} alt="What Up" />
            <div className="videos">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/EQEuMy1JPGE?si=JFIGbt_JpadVXdLO" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>    
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/rnRfcSkHDFE?si=mEc0H6WBJTirUqFY" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>    
                </iframe>
            </div>
        </div>
        
    );
};
export default Media;