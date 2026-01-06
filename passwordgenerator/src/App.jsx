import { useState, useCallback, useEffect , useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [nunberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passworRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (nunberAllowed) str += "0123456789"
    if (characterAllowed) str += "~!@#$%^&*(){}"

    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [length, nunberAllowed, characterAllowed, setPassword])

  const copyToClipBoard = useCallback(() => {
    passworRef.current?.select()
    passworRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {
    passwordgenerator()
  } , [length,nunberAllowed,characterAllowed,passwordgenerator])

  return (
    <>
      <div className="text-gray-200 bg-gray-700 w-full pb-2 max-w-lg rounded-lg my-8 px-4 mx-auto text-2xl shadow-md text-center">

        <h2 className="mb-4 pt-4 font-semibold">
          Password Generator
        </h2>

        <div className="rounded-lg shadow mb-4 w-full overflow-hidden flex bg-gray-400">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            ref={passworRef}
            className="outline-none w-full py-2 px-3 bg-white text-gray-800 text-lg"
          />
          <button 
          onClick={copyToClipBoard}
          className='text-md px-2 py-2 cursor-pointer bg-blue-700'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex text-center gap-x-1'>
            <input type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
              className='cursor-pointer'
            />
            <label className='ml-1 font-semibold text-orange-400'>Length : {length}</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input
            className='ml-3 cursor-pointer'
              type="checkbox"
              defaultChecked={nunberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}

            />
            <label className='font-semibold text-orange-400'>Number</label>
          </div>
          <div className='flex text-center gap-x-1'>
            <input
            className='ml-3 cursor-pointer'
              type="checkbox"
              defaultChecked={characterAllowed}
              id='numberInput'
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}

            />
            <label className='font-semibold text-orange-400'>Character</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
