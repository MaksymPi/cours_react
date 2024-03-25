import React from 'react'
import { Link } from 'react-router-dom'

const Users = () => {
  return (
    <div className='Main'>
        <h1>Users</h1>
        <ul>
            <Link to='/users/walles'><li>John Walles</li></Link>
            <Link to='/users/beanit'> <li>Jim Beanit</li></Link>
        </ul>
    </div>
  )
}

export default Users