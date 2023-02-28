import React, { useState ,useRef} from 'react';
import '../../style/Album.css';
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef((props, ref) => {
  return (
      <div className="demoPage" ref={ref}>
          <h1>Page Header</h1>
          <p>{props.children}</p>
          <p>Page number: {props.number}</p>
      </div>
  );
});


function Album(props) {
    return (
      <>
      <HTMLFlipBook width={500} height={700} showCover={true} maxShadowOpacity={0.3} drawShadow={true}>
      <div className="demoPage demoPage1"></div>
      <div className="demoPage demoPage2"></div>
      <div className="demoPage demoPage3"></div>
      <div className="demoPage demoPage4"></div>
    </HTMLFlipBook>
    </>
    );
}

export default Album;