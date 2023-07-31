import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineAccountCircle } from "react-icons/md"

function NavBar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <nav className='flex  space-x-5'>
      <NavLink to="/host" className='hover:underline hover:font-semibold'
        style={({ isActive }) => isActive ? activeStyle : null}
      > Host </NavLink>
      <NavLink to="/about" className='hover:underline'
        style={({ isActive }) => isActive ? activeStyle : null}
      > About </NavLink>
      <NavLink to="/vans" className='hover:underline hover:font-semibold'
        style={({ isActive }) => isActive ? activeStyle : null}
      >Vans</NavLink>
      <NavLink to="/login" className='hover:underline hover:font-semibold text-xl'
        style={({ isActive }) => isActive ? activeStyle : null}
      ><MdOutlineAccountCircle /></NavLink>
    </nav>
  )
}

export default NavBar