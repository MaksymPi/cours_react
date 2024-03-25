import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const UserPage = () => {
    const user = useLoaderData();
  return (
    <div className='Main user-page'>
        <div>
            <Link to="/users">Back</Link>
        </div>
        <img src={user.img} alt='avatar'/>
        <h2>User: {user.name}</h2>
        <h2>Age: {user.age}</h2>
        <h2>Age: {user.email}</h2>
    </div>
  )
}

export default UserPage