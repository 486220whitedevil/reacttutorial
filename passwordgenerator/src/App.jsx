import { useState,useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [nunberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordgenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(nunberAllowed) str+= "0123456789"
    if(characterAllowed) str+= "~!@#$%^&*(){}"

    for(let i=0; i<=str.length; i++){
      let char = Math.floor(Math.random() * str.length +1)
      
      pass = str.charAt(char)

    }
    setPassword(pass)
  }, [length, nunberAllowed, characterAllowed , setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md'></div>
    </>
  )
}

export default App
