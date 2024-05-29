import React from "react";
import "./Social.css";
import youtubePic from "../../../images/youtube-link.png";    /* <a href="https://www.freepik.com/search">Icon by Enamo Studios</a> */
import facebookPic from "../../../images/facebook-icon.png";  /* <a href="https://www.freepik.com/search">Icon by Ruslan Babkin</a> */
import gigSaladPic from "../../../images/band_icon.png";
import instaPic from "../../../images/insta-link.png";


function Social(): JSX.Element {
    const links: Record<string, Record<string, string>> = {
        "youtube": {
            "image": youtubePic,
            "link": "https://www.youtube.com/@DarkNecessitiesTribute"
        },
        "facebook": {
            "image": facebookPic,
            "link": "https://facebook.com/profile.php?id=61557965231061&mibextidLQQJ4d"
        },
        "insta": {
            "image": instaPic,
            "link": "https://www.instagram.com/darknecessitiestribute?igsh=MzRIODBiNWFIZA=="
        }
    }
    return (
        <div className="social-container">
            {Object.entries(links).map(([key, value]: [string, Record<string, string>]): JSX.Element => ( 
                    <a target="_blank" rel="noreferrer" className="social-link" href={value.link}>
                        <img 
                            className="social-image"
                            id={key}
                            src={value.image} 
                            alt={key} 
                            key={key}
                        />
                    </a>
            ))}
        </div>
    );
};
export default Social;