import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='flex  space-x-5'>
        <Link to ="about"> About </Link>
        <Link  to ="/vans">Vans</Link>
    </nav>
  )
}

export default NavBar