import React, {useEffect} from 'react';
import Main from "./component/Main"
import {FullPage,Slide} from "react-full-page"
import './App.css';

function App() {

  return (
    <div className='App'>
      <FullPage controls controlsProps={{ className: "slide-navigation" }}>
        <Slide>
          <div className="section-common section-area1">
            <Main />
          </div>
        </Slide>

        <Slide>
          <div className="section-common section-area2">
            2
          </div>
        </Slide>

        <Slide>
          <div className="section-common section-area3">
            3
          </div>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
