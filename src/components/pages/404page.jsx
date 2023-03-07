import React from 'react'
import { Link } from 'react-router-dom'
function Page() {
  return (
    <div className='bg-scroll bg-cover bg-center bg-no-repeat  h-full p-8  '>
        <h1 className=' text-2xl font-bold'>Sorry, the page you were looking for was not found.</h1>
        <button className='bg-black text-white text-md p-2 px-auto w-full mt-8  rounded hover:translate-y-1'>
  <Link to="vans" >Return to Home page</Link>
  </button>
    </div>
  )
}

export default Page