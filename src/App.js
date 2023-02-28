import React from 'react';
import Main from "./component/Main/Main";
import Day1 from "./component/Day1/Day1";
import Day2 from "./component/Day2/Day2";
import {FullPage,Slide} from "react-full-page";
import './App.css';
import "./asset/font/font.css"

function App() {
  return (
    <div className='app'>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <div className="section-common section-area1">
            <Main />
          </div>
        </Slide>

        <Slide>
          <div className="section-common section-area2">
            <Day1 />
          </div>
        </Slide>

        <Slide>
          <div className="section-common section-area3">
            <Day2/>
          </div>
        </Slide>

        <Slide>
          <div className="section-common section-area4">
            4
          </div>
        </Slide>
        
        <Slide>
          <div className="section-common section-area5">
            4
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
