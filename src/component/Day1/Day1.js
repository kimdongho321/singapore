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
    const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

    useEffect(() => {
        AOS.init();
        const handleScroll = () => setScrollPosition(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      
    useEffect(() => {
        if (scrollPosition === 0 || scrollPosition >= 1000) {
        setMode('wait');
        setStyle({ display: 'block' });
        }
    }, [scrollPosition, mode]);

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
                <div className="airport-ani" style={style}>
                    <div className="airplane">
                        <img src={airplane}/>
                    </div>
                    <div className="airport">
                        <img src={airport} onClick={pageload} /> 
                    </div>
                </div>  
                {conditionRender(mode)}
            </div>
            
        </>
    )
}