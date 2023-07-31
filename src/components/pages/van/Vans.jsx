import React, { Suspense } from 'react'
// { useEffect, useState }
import { Await, Link, useLoaderData, useSearchParams, defer} from 'react-router-dom';
import { getVans } from '../../api';
// import toast from 'react-hot-toast';


export function loarder() {
  const vansPromise =  getVans();  
  return  defer({vans : vansPromise});
}
function Vans() {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const buttonStyle = "bg-vanButton p-1 px-3 rounded"
  const typeFilter = searchParams.get("type")
  const dataPromise = useLoaderData()



const vansElement =  vans => {
  console.log(vans)
  const vansDisplayed = typeFilter ? vans.filter(item => item.type.toLowerCase() === typeFilter) : vans
  const vanCard = vansDisplayed?.map((items) => {
    return (
      <div key={items.id}>
        <Link to={items.id} state={{ search: searchParams.toString(), type: typeFilter }}>
          <img src={items.imageUrl} alt='' className='min-w-xs min-h-min rounded-lg' loading='lazy' />
          <div className='flex justify-between m-1  font-bold'>
            <h1 className=''> {items.name}</h1>
            <p >${items.price} <span className='text-xs font-light '>/day</span></p>
          </div>
          <button className={`mx-2 m-2 ${items.type === "simple" ? "bg-simple hover:bg-red-600" : items.type === "luxury" ? "bg-luxury hover:bg-gray-500" : "bg-rugged hover:bg-green-500"} text-white p-1 px-4 rounded`}>{items.type}</button>
        </Link> </div>
    )
  })

  return (
    <>
      <div className=' flex justify-between my-4'>
        <div className='space-x-4 flex'>
          <button className={`hover:bg-simple hover:text-white ${typeFilter === 'simple' ? "bg-simple text-white p-1 px-3 rounded" : buttonStyle}`} onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
          <button className={`hover:bg-rugged hover:text-white ${typeFilter === 'rugged' ? "bg-rugged text-white p-1 px-3 rounded" : buttonStyle}`} onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
          <button className={`hover:bg-luxury hover:text-white ${typeFilter === 'luxury' ? "bg-luxury text-white p-1 px-3 rounded" : buttonStyle}`} onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
        </div>
        {typeFilter && <button className='hover:underline' onClick={() => setSearchParams()}>Clear filters</button>}
      </div>
      <div className=' grid grid-cols-2 gap-6 ' >
        {vanCard}
      </div>
    </>
  );
}
  return (
    <div className='m-6'>
      <h1 className='my-4 text-3xl font-bold'>Explore our van options</h1>
      <Suspense fallback={<h1>Loarding...</h1>}>
      <Await resolve={dataPromise.vans}>
        {vansElement}
      </Await>
      </Suspense>
    </div>
  )
}

export default Vans
