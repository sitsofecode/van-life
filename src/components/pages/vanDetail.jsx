import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
function VanDetail() {
  const [vanDetails, setVanDetails] = useState([])
  const params = useParams()
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(response => (response.json()))
      .then(data => setVanDetails(data.vans));
  }, [params.id])

  console.log(vanDetails.imageUrl)

  return (
    <div>

      {vanDetails ? <div className='m-4'>
        blue
        <div className='my-4'>
          <img src={vanDetails.imageUrl} alt='' className='min-w-xs min-h-min rounded-lg'></img>
        </div>
        <button className={`my-4 ${vanDetails.type === "simple" ? "bg-simple hover:bg-red-600" : vanDetails.type === "luxury" ? "bg-luxury hover:bg-gray-500" : "bg-rugged hover:bg-green-500"} text-white p-1 px-4 rounded`}>{vanDetails.type}</button>
        <h1 className="text-3xl font-bold ">{vanDetails.name}</h1>
        <p className=' my-4'><span className='font-bold text-xl'>${vanDetails.price}</span>/ day</p>
        <p>{vanDetails.description}</p>
        <button className='bg-amber-500 text-white text-lg font-semibold p-2 px-auto w-full mt-8  rounded hover:translate-y-1'>Rent this van </button>
      </div> : <h2 className='text-center'> Loarding ... </h2>}
    </div>
  )
}

export default VanDetail
