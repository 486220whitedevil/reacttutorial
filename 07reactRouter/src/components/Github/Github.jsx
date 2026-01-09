import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()  // it collect all data of github account 
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/486220whitedevil`) // git hub api
    //         .then((res) => res.json()) // convert data to json format
    //         .then((res) => {
    //             console.log(res)
    //             setData(res)
    //         })
    // }, [])
    return (
        <div className='text-center bg-white text-black text-2xl flex justify-center align-center'>
            Github Followers : {data.name} 
            <img src={data.avatar_url} alt="" className='w-100 h-100'/>
        </div>
    )
}

export default Github

 export const useGithubData = async () => {
    const response = await fetch(`https://api.github.com/users/486220whitedevil`)

    return response.json()
}
