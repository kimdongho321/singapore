import React, { useEffect } from "react";
import "../../style/Main.css";
import bgimg from "../../asset/image/main-bg.jpg";
import maintitle from "../../asset/image/main-title.png";
import AOS from "aos";

export default function Main(){
    useEffect(() => {
        AOS.init();
      }) 
    return(
        <>
            <div className='bg-img'>
                <img src={bgimg}/>
                <div className="bg-aos" data-aos="zoom-out-down">
                    <div className='bg-title'></div>
                </div>
            </div>
            <div className='bg-gradation'>
                <div className='bg-border'></div>
            </div>
        </>
    )

}
