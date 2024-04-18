import React from "react";
import './ShowIndex.css';
import ShowIndexItem from "../ShowIndexItem/ShowIndexItem";

function ShowIndex(): JSX.Element {
    const dates: Record<string, Record<string, string>> = { 
        "PSB2": {                                           
            "month": "April",                               
            "check": "20",
            "day": "20th",
            "time": "9:00PM - 10:30PM",
            "year": "2024",
            "maps": "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqFQgCEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg5MgYIARBFGEAyFQgCEC4YJxivARjHARiABBiKBRiOBTIHCAMQABiABDINCAQQABiDARixAxiABDIKCAUQABixAxiABDIQCAYQLhivARjHARiABBiOBTINCAcQLhixAxiABBiKBdIBCDI0MThqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVUqXV-354-AMSZenMcXDet2&daddr=875+Rincon+Ave,+Livermore,+CA+94551",
            "name": "Pine Street Bar"
        }
    };
    return (
        <div id="show-section">
            <div className="show-section-wrapper">
                <h1 className="show-title">
                    Dark Necessities Live!
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