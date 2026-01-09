
import Header from './components/Header/Header'

import './App.css'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function App() {
  

  return (
   <div className='min-h-screen bg-black flex flex-col'>
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default App
