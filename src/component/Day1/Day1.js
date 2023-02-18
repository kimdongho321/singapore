import React, { useEffect } from "react";
import AOS from "aos";
import "../../style/Day1.css"
import "aos/dist/aos.css";

export default function Main(){
    useEffect(() => { 
        AOS.init(); 
      }, []); 
      
    return(
        <>
            <div className="day1" data-aos="zoom-out-down" data-aos-offset="937" data-aos-duration="1000">
                ?????
            </div>
        </>
    )
}