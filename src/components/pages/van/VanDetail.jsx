import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export function vanDetailsLoader({ params }) {
  return getVans(params.id);  

}

function VanDetail() {
  const vanDetails = useLoaderData();
  const location = useLocation();

  // useEffect(() => {
  //   fetch(`/api/vans/${params.id}`)
  //     .then(response => (response.json()))
  //     .then(data => setVanDetails(data.vans));
  // }, [params.id])


  const search = location.state?.search || ""

  return (
    <div>

      {vanDetails ? <div className='m-4'>
        <Link to={`..?${search}`} relative="path" className='hover:underline '> &larr; Back to {location.state.search ? location.state.type : "all "} vans </Link>
        <div className='my-4'>
          <img src={vanDetails.imageUrl} alt='' className='min-w-xs min-h-min rounded-lg'></img>
        </div>
        <button className={`my-4 ${vanDetails.type === "simple" ? "bg-simple hover:bg-red-600" : vanDetails.type === "luxury" ? "bg-luxury hover:bg-gray-500" : "bg-rugged hover:bg-green-500"} text-white p-1 px-4 rounded`}>{vanDetails.type}</button>
        <h1 className="text-3xl font-bold ">{vanDetails.name}</h1>
        <p className=' my-4'><span className='font-bold text-xl'>${vanDetails.price}</span>/ day</p>
        <p>{vanDetails.description}</p>
        <button className='bg-amber-500 text-white text-lg font-semibold p-2 px-auto w-full mt-8  rounded hover:translate-y-1'>Rent this van </button>
      </div> :
        <h2 className='text-center p-4 font-semibold'> Loarding ... </h2>}
    </div>
  )
}

export default VanDetail
