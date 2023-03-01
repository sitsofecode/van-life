import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './navBar'

function Header() {
  return (
    <div className='flex justify-between  bg-headerColor p-8 w-full'>
        <div>
          <Link to ="/" > <img src='logog.png' alt='' className='w-32'></img></Link>
        </div>
        <NavBar/>
    </div>
  )
}

export default Header