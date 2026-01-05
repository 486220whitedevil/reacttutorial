import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // let arr = {
  //   username: "Deepak",
  //   age: 25
  // }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-red-500 rounded-xl'>this is tailwind</h1>
      <Card username="Deepak"/> 
      <Card username="Rohit"/>
    </>
  )
}

export default App
