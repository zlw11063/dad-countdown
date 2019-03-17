import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CircleType from 'circletype';
import Countdown from 'react-countdown-now';
import './App.css';

export default function App() {

  const nameRef = React.createRef();
  const modelRef = React.createRef();

  useEffect(() => {
    const nameCircle = new CircleType(nameRef.current);
    const modelCircle = new CircleType(modelRef.current);
    nameCircle.radius(40).dir(-1);
    modelCircle.radius(77).dir(-1);
  });

  return (
    <div className="app">
      <div className="countdown">
        <Countdown date={Date.now() + (new Date('May 31, 2019') - Date.now())} />
      </div>
      <div className="ship-container">
        <div className="enterprise">
          <div className="saucer">
            <div className="bridge" />
            <div ref={nameRef} className="name">U.S.S. Williams</div>
            <div ref={modelRef} className="model">DAD-1701</div>
          </div>
          <div className="body" />
          <div className="left-arm" />
          <div className="right-arm" />
          <div className="left-jet" />
          <div className="right-jet" />
        </div>
      </div>
      <div id='title'>
        <span>
          THE FINAL FRONTIER
        </span>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);