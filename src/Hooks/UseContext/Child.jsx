import React from 'react'
import { useUser } from './UserContext'

const Child = () => {
    const {user,setUser}=useUser()
  return (
    <div>
        <div>
            Hi! {user}
        </div>
        <button onClick={()=>setUser('user2')}>Change Name</button>
    </div>
  )
}

export default Child