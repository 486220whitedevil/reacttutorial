import { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const { user } = useContext(UserContext)

    const { setUser } = useContext(UserContext)
    const handleLogout = (e) => {
        e.preventDefault()
        setUser(null)
    }
    if (!user) {
        return <div>Please Login</div>
    }
    else {
        return (
            <>
                <div> Welcome , {user.username}</div>
                <button className='bg-black text-white' onClick={handleLogout}>Logout</button>
            </>
        )
    }
}

export default Profile
