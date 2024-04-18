import React from "react";
import "./AboutIndexItem.css";
import rickPic from "../../../images/galleryPhotos/IMG_5416.jpg";
import guitarPic from "../../../images/galleryPhotos/guitar.jpg";

interface AboutIndexItemProps {
    name: string;
};

function AboutIndexItem(props: AboutIndexItemProps): JSX.Element {
    const { name } = props;
    const rockers: Record<string, Record<string, string>> = {
        "Rick": {
            "description": "Meet Rick Gentry, the ultimate groove maestro with a heart pulsating to the rhythm of bass! 🎸 From fourth-grade trumpet tunes to high school guitar shredding, Rick's musical journey is fueled by passion. When fate called for a bassist, Rick answered, laying down a decade of seasoned bass lines. Life's twists led him to put the bass aside to focus on raising his kids, but a revelation reignited his love for music. Influenced by legends like Flea and Duff McKagan, Rick's thunderous bass grooves electrify stages. But he's not just about playing; he's about living, breathing, and exuding music! Witness Rick's infectious energy and killer bass licks as he takes center stage, making every performance a sonic adventure!",
            "instrument": "Bass Master",
            "image": rickPic
        },
        "Brett": {
            "description": "Meet Brett Hertzberg, the East Bay's newest guitar sensation! Originally from the East Coast, Brett's musical journey began in second grade with classical trumpet. Now, he's a master of searing guitar leads, exploring genres from hard rock to jazz. Influenced by legends like Led Zeppelin and Alice in Chains, Brett combines elements of multiple instruments into his unique style. After dazzling in Seattle with the New Norm, he's now making waves in the East Bay. Don't miss out on his meticulous melodies and electrifying performances!",
            "instrument": "Lead Guitar",
            "image": guitarPic
        }
    };
    return (
        <div className="about-index-item-wrapper">
            <div className="rocker-tag">
                <img className="rocker-image" src={rockers[name].image} alt={name} />
            </div>
            <div className="rocker-info">
                <div className="rocker-name">
                    {name} <span className="hide-mobile instrument">-</span> <span className="instrument">{rockers[name].instrument}</span>
                </div>
                <p className="rocker-desc">
                    {rockers[name].description}
                </p>
            </div>
        </div>
    )
};
export default AboutIndexItem;