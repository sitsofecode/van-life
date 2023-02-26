import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return ( <div className=" bg-homebg bg-scroll bg-cover bg-center bg-no-repeat text-white p-8">
  <h1 className='text-white text-2xl font-bold'>You got the travel plans, we got the travel vans qsx.</h1>
  <p className='my-4'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
  <button className='bg-amber-500 text-white text-md p-2 px-auto w-full mt-8  rounded hover:translate-y-1'>
  <Link to="vans" >Find your van</Link>
  </button>
</div>
  )
}

export default Home