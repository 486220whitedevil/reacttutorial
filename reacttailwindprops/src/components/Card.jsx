import React from 'react'

function Card({username}) {
    
  return (
    <div className="card ">
        <img className = 'rounded-xl' src="https://www.shutterstock.com/image-photo/amazing-image-cheetah-running-260nw-2570318657.jpg" alt="" />
        <button className='bg-red-500 '>{username}→ </button>
       
      </div>
  )
}

export default Card
