import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

function Header() {
  return (
    <div className='flex justify-between  bg-mainColor lg:p-8 p-4 w-full'>
      <div>
        <Link to="/" > <img src='/logog.png' alt='' className='w-32'></img></Link>
      </div>
      <NavBar />
    </div>
  )
}

export default Header