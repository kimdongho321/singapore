import React, { useEffect, useState } from "react";
import AOS from "aos";
import "../../style/Day1.css";
import "aos/dist/aos.css";
import airplane from "../../asset/image/Day1/airplane.png";
import airport from "../../asset/image/Day1/airport.png";
import Travle from "./Travle.js";
import Album from "./Album.js";

export default function Day1(){
    const [mode, setMode] = useState('wait');
    const [style, setStyle] = useState({display: 'block'})

    useEffect(() => { 
        AOS.init(); 
    }, []); 

    const pageload = () => {
        setMode("travle")
        setStyle({display: 'none'})
    }

    const conditionRender = (conditionMode) => {
        if (conditionMode === "travle") {
            return <Travle />
        } else if (conditionMode === "album") {
            return <Album />
        }
    }

    return(
        <>
            <div className="day1" >
                <div className="airport-ani" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" style={style}>
                    <div className="airplane" data-aos="zoom-in">
                        <img src={airplane}/>
                    </div>
                    <div className="airport" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1500">
                        <img src={airport} onClick={pageload} /> 
                    </div>
                </div>  
                {conditionRender(mode)}
            </div>
            
        </>
    )
}