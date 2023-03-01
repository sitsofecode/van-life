import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Vans() {
  const [vans, setVans] = useState(null)
  useEffect(() => {
    fetch("api/vans")
      .then((response) => response.json())
      .then((data) => { setVans(data.vans) });
  }, [])
  const vanCard = vans?.map((items) => {
    return (
      <div key={items.id}>
        <Link to={`/vans/${items.id}`}>
        <img src={items.imageUrl} alt='' className='min-w-xs min-h-min rounded-lg' />
      <div className='flex justify-between m-1  font-bold'> 
      <h1 className=''> {items.name}</h1>
      <p >${items.price} <span className='text-xs font-light '>/day</span></p>
      </div>
      <button className={`mx-2 m-2 ${items.type === "simple"?"bg-simple hover:bg-red-600": items.type ==="luxury"?"bg-luxury hover:bg-gray-500":"bg-rugged hover:bg-green-500"} text-white p-1 px-4 rounded`}>{items.type}</button>
     </Link> </div>
    )
  })
  return (
    <div className='m-6'>
      <h1 className='my-4 text-3xl font-bold'>Explore our van options</h1>
      <div className=' flex justify-between my-4'>
        <div className='space-x-4'>
        <button className='bg-vanButton p-1 px-3 rounded'>Simple</button>
        <button className='bg-vanButton p-1 px-3 rounded'>Rugged</button>
        <button className='bg-vanButton p-1 px-3 rounded'>Luxury</button>
        </div>
        <button>Clear filters</button>
      </div>
    <div className=' grid grid-cols-2 gap-6 ' >
      {vanCard}
    </div>
    </div>
  )
}

export default Vans