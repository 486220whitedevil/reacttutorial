import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex  items-center justify-center h-screen'>
        <div className='bg-black opacity-80 h-100 w-150 rounded-lg relative'>
          <div className='bg-white text-black absolute top-10 w-4/5 mx-15 h-3/10 rounded-lg '>
            <div className='flex w-9/10 h-2/5 text-black mx-auto mt-2 rounded-md text-left py-1 justify-between font-semibold'>
              <div className=''>From</div>
              <div>Currency Type</div>
            </div>
            <div className='flex w-9/10 h-2/5 text-black mx-auto mt-2 rounded-md text-left py-1 justify-between font-semibold'>
              <div className=''>0</div>
              <select name="" id="" className='w-20 bg-gray-200 px-1 rounded-lg'>
                <option value="">Inr</option>
                <option value="">Inr</option>
                <option value="">Inr</option>
              </select>
            </div>
          </div>
          <button className='w-15 h-8 bg-green-600 rounded-md z-10 top-38 left-70 absolute text-white font-semibold cursor-pointer'>Swap</button>
          <div className='bg-white text-black absolute top-45 w-4/5 mx-15 h-3/10 rounded-lg'>
            <div className='flex w-9/10 h-2/5 text-black mx-auto mt-2 rounded-md text-left py-1 justify-between font-semibold'>
              <div className=''>To</div>
              <div>Currency Type</div>
            </div>
            <div className='flex w-9/10 h-2/5 text-black mx-auto mt-2 rounded-md text-left py-1 justify-between font-semibold'>
              <div className=''>0</div>
              <select name="" id="" className='w-20 bg-gray-200 px-1 rounded-lg'>
                <option value="">Inr</option>
                <option value="">Inr</option>
                <option value="">Inr</option>
              </select>
            </div>
          </div>
          <button className='bg-red-600 text-white absolute bottom-8 w-4/5 mx-15 h-1/10 rounded-lg font-semibold cursor-pointer'>Convert USD to INR</button>
        </div>
      </div>
    </>
  )
}

export default App
