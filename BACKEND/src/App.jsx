import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let value = 10;

function App() {

  // let [object, function] = useState(DefaultValue);
  let [value, setCounter] = useState(0);    // this is a hook

  const addValue = () => {
    // value += 1;    // this will not update the value on UI. for this we have to use state.
    // console.log(`value added: ${value}`)
    if(value >= 20) {
      console.log("Value can't be greater than 20.");
    }
    else
      setCounter(value+1) // we have to pass the updated object through its function to reflect it on UI.
  }

  const removeValue = () => {
    if(value <= 0) {
      console.log("Value can't be negative")
    }
    else
      setCounter(value-1);
  }

  return (
    <>
      <h1>Mukul Bhatia. {value}</h1>
      <button onClick={addValue}>Add</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>RemoveValue</button>
      <br></br>
      <div>
        <p>acutal value: {value} </p>
      </div>
      <p>LPU University. My score is {value}.</p>
    </>
  )
}

export default App