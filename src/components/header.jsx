import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './navBar'

function Header() {
  return (
    <div className='flex justify-between  bg-headerColor p-8'>
        <div>
          <Link to ="/"> #Vanlife</Link>
        </div>
        <NavBar/>
    </div>
  )
}

export default Header