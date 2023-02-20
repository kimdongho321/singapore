import React, { useEffect ,useState} from "react";
import "../../style/Day1.css";
import airport from "../../asset/image/Day1/airport.png"
import earth from "../../asset/image/Day1/earth.png"
import singapore from "../../asset/image/Day1/singapore.png"

export default function Travle(){

    return(
        <div className="travle">
            <div className="travle-ani">
                <div className="travle-airport">
                    <img src={airport}/>
                </div>
                <img src={earth}/>
                <img src={singapore} className="singapore"/>
            </div>
        </div>
    )
}