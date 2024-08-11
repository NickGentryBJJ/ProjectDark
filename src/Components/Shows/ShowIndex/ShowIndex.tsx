import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const dates: Record<string, Record<string, string>> = { 
        "PSBS": {                                           
            "month": "September",                               
            "check": "7",
            "day": "7th",
            "time": "",
            "year": "2024",
            "maps": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYOTIMCAMQABhDGIAEGIoFMg0IBBAAGIMBGLEDGIAEMgwIBRAuGBQYhwIYgAQyDQgGEC4YrwEYxwEYgAQyCggHEAAYsQMYgAQyCggIEC4YsQMYgAQyCggJEAAYsQMYgATSAQc2ODFqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUqXV-354-AMSZenMcXDet2&daddr=875+Rincon+Ave,+Livermore,+CA+94551",
            "name": "Pine Street Bar"
        },
         "PSB": {                                           
            "month": "September",                               
            "check": "21",
            "day": "21st",
            "time": "",
            "year": "2024",
            "maps": "https://www.google.com/maps/place/GARDEN+AMP/@33.7770723,-117.9405991,16z/data=!3m1!4b1!4m6!3m5!1s0x80dd2809136ccd83:0x7601eef67cb146a!8m2!3d33.7770723!4d-117.9405991!16s%2Fg%2F11bbx074h1?entry=ttu",
            "name": "GARDEN AMP"
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
                    Live Tour
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
