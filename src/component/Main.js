import React from 'react';
import "../style/Main.css";
import bgimg from "../asset/image/main-bg.jpg";

export default function Main(){

    return(
        <>
            <div className='bg-img'>
                <img src={bgimg}/>
                <div className='bg-title'></div>
            </div>
            <div className='bg-gradation'>
                <div className='bg-border'></div>
            </div>
        </>
    )

}
