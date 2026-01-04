import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [count , setCount] = useState(0)

   let addValue = () => {
    if(count === 20) {
      count = 0;
    }
    count = count + 1;
    setCount(count)
   }
   let decreaseValue = () => {
    if(count === 0) {
      count = 21;
    }
    count = count - 1;
    setCount(count)
   }

  return (
   
    <>
      <h1>this is counter app</h1>
      <h3>counter is : {count}</h3>
      <button onClick={addValue}>Add value : {count}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value : {count}</button>
    </>
  )
}

export default App
