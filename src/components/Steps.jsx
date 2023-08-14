import React from 'react';
import { useState } from 'react';
import "../../src/index.css"
const messages = [
    "start with a 10-minute walk",
    "start strength training ",
    "Try fun and relaxing physical activities",
    "Move more, sit less",
    "Schedule a specific time",
    "making it social",
    "download a fitness app",
    "Reward yourself",
    "friendly competition",
    "Listen to your body"
];

const Steps = () => {
  const[step,setStep] = useState(1);
  return (
    <div className='steps'>
      <div className="numbers">
        <div className={step >= 1 ? "active" : "" }>1</div>
        <div className={step >= 2 ? "active" : "" }>2</div>
        <div className={step >= 3 ? "active" : "" }>3</div>
        <div className={step >= 4 ? "active" : "" }>4</div>
        <div className={step >= 5 ? "active" : "" }>5</div>
        <div className={step >= 6 ? "active" : "" }>6</div>
        <div className={step >= 7 ? "active" : "" }>7</div>
        <div className={step >= 8 ? "active" : "" }>8</div>
        <div className={step >= 9 ? "active" : "" }>9</div>
        <div className={step >= 10 ? "active" : "" }>10</div>
      </div>
     <p className="message">
      Step {step}: {messages[step-1]}
     </p>
     <div className="buttons">
      <button className = "btn prevbtn" style = {{backgroundColor:"#7950f2",color:"#fff"}}
      onClick = {() => setStep( step > 1 ? (step => step - 1) : 1)}
      >Previous</button>
      <button className = "btn nextbtn" style = {{backgroundColor:"#7950f2",color:"#fff"}}
      onClick = {() => setStep( step < 10 ? (step => step + 1) : 10)}
      >Next</button>
     </div>
    </div>
  );
};

export default Steps

