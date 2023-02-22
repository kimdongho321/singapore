import React, { useEffect ,useState} from "react";
import "../../style/Travle.css";
import airport from "../../asset/image/Day1/airport.png"
import earth from "../../asset/image/Day1/earth.png"
import singapore from "../../asset/image/Day1/singapore.png"
import Album from "./Album.js"

export default function Travle(){
    const [style, setStyle] = useState({display: 'block'})
    const [mode, setMode] = useState('wait')

    const conditionRender = (conditionMode) => {
        if (conditionMode === "album") {
            return <Album />
        }
    }

    const pageload = () => {
        setMode("album")
        setStyle({display: 'none'})
    }

    return (
        <>
            <div className="travle" style={style}>
                <div className="travle-ani">
                    <div className="travle-airport">
                        <img src={airport} onClick={pageload}/>
                    </div>
                    <div className="earth-div">
                        <img src={earth} className="earth"/>
                    </div>
                    <img src={singapore} className="singapore"/>
                </div>
            </div>
            {conditionRender(mode)}
        </>
    )
}