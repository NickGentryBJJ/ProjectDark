import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const dates: Record<string, Record<string, string>> = { 
        "PSB2": {                                           
            "month": "June",                               
            "check": "6",
            "day": "6th",
            "time": "",
            "year": "2024",
            "maps": "https://www.google.com/maps/dir//2112+N+Main+St,+Walnut+Creek,+CA+94596/@37.9088647,-122.1469277,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808561977b5834a7:0x1d4b3deaeaf94f61!2m2!1d-122.0645267!2d37.9088934?entry=ttu",
            "name": "Retro Junkie"
        },
        "PSB": {                                           
            "month": "September",                               
            "check": "28",
            "day": "28th",
            "time": "",
            "year": "2024",
            "maps": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgBEC4YrwEYxwEYgAQyBwgAEAAYjwIyDQgBEC4YrwEYxwEYgAQyDQgCEC4YgwEYsQMYgAQyEAgDEAAYgwEYsQMYgAQYigUyEAgEEC4YrwEYxwEYgAQYjgUyBwgFEAAYgAQyDQgGEAAYgwEYsQMYgAQyFggHEC4YgwEYrwEYxwEYsQMYgAQYjgUyEwgIEC4YgwEYxwEYsQMY0QMYgAQyBwgJEAAYjwLSAQgzMTA1ajBqN6gCALACAA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KTNma8uV_o-AMbBTaealS8wj&daddr=561+1st+St,+Brentwood,+CA+94513",
            "name": "Brentwood Emporium"
        }
    };
    return (
        <div id="show-section">
            <div className="show-section-wrapper">
                <h1 className="show-title">
                    LIVE TOUR
                </h1>                
                {Object.entries(dates).map(([key, value]: [string, Record<string, string>]): JSX.Element | null => { 
                        return (
                            <ShowIndexItem // initialize showIndexItem component for each valid date object
                                key={key} 
                                location={value.name}
                                maps={value.maps}
                                year={value.year}
                                month={value.month}
                                day={value.day}
                                time={value.time}
                            />
                        );
                })}
            </div>
        </div>
    );
};
export default ShowIndex;