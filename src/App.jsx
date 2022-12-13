import { useEffect, useMemo, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Calculator from './calculator/Calculator'

function App() {
  // const [count1, setCount1] = useState(0)
  // const [count2, setCount2] = useState(0)
  // const inputRef = useRef(null);
  // useEffect(()=>{
  //     inputRef.current.focus();
  // }
  // )
  // const cal = useMemo(()=>{
  //   let i = 0;
  //   while(i<700000000){
  //     i++;
  //   }
  //   return count1;
  // },[count1])

  return (
    <div className="App">
      {/* <div>
        <div className="card">
          <button onClick={() => setCount1((count) => count + 1)}>
            count is {count1}
          </button>
          <div>{cal}</div>
      </div>
        <button onClick={() => setCount2((count) => count + 1)}>
          count is {count2}
        </button>
        <br></br><br></br>
        <input ref={inputRef} type="text"></input>
        <br></br>
        <input  type="text" ></input>
        <br></br>
      </div> */}
      <Calculator/>
    </div>
  )
}

export default App
