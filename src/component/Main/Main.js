import React, { useEffect ,useRef} from "react";
import "../../style/Main.css";
import bgimg from "../../asset/image/Main/main-bg.jpg";
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
