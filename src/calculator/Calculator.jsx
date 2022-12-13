import {  useState } from 'react';
import Header from '../Header/Header';
import './cal.css';

function Calculator() {
    const [output, setOutput] = useState("");
    const [calculation, setCalculation] = useState("");
    let arr = [];
    function createDigit  (){
      for(let i=9;i>0;i--){
        arr.push(
          <button  onClick={()=>{updateCal(i.toString())}}>{i}</button>
        )
      }
      return arr;
    }

    // Calculation Part
    const symbol = ['+','-','/','*','.'];
    const updateCal = value=>{
        if(symbol.includes(value) && calculation === ''){
            return;
        }
        setCalculation(calculation+value);
        if(!symbol.includes(value)){
          setOutput(eval(calculation+value).toString())
        }
     
  }
    const calculate = ()=>{
      setCalculation(eval(calculation).toString());
    }
    const reset =()=>{
      setCalculation("");
      setOutput('');
    }
    const backspace =()=>{
     setCalculation( calculation.slice(0,-1));
    }
    return (
      <div className="container">
        <Header/>
        <div className="output-box">
            <div className='output' >{output? <strong>{output}</strong>:""}</div>
            <div className='cal-box'>{calculation}</div>
        </div>
          <div className="key-box">
            <div>
                <div className='top-btn' >
                    <button className='white-btn' onClick={reset}>AC</button>
                    <button type='reset' className='white-btn' onClick={backspace}>&lt;</button>
                    <button  className='white-btn wide' onClick={()=>{updateCal("+")}}>+</button>
                </div>
                <div className='grid-box'>{createDigit()}</div>
                <span className="bottom"><button className='wide'  onClick={()=>{updateCal("0")}}>0</button> <button  onClick={()=>{updateCal(".")}}>.</button></span>
            </div>
            <div className="symbolBtn">
            <button  className='org-btn' onClick={()=>{updateCal("-")}}>-</button>
            <button  className='org-btn' onClick={()=>{updateCal("/")}}>/</button>
            <button  className='org-btn' onClick={()=>{updateCal("*")}}>x</button>
            <button className='org-btn' onClick={calculate}>=</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default Calculator;