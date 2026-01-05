import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-gray-800 text-black px-2 py-2
        rounded-2xl'>
          <button onClick={() => setColor("black")} className='outline-none px-4 text-white shadow-lg rounded-full py-1 cursor-pointer' style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("red")} className='outline-none px-4 text-white shadow-lg rounded-full py-1 cursor-pointer' style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className='outline-none px-4 text-white shadow-lg rounded-full py-1 cursor-pointer' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("white")} className='outline-none px-4 text-black shadow-lg rounded-full py-1 cursor-pointer' style={{backgroundColor: "white"}}>White</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
