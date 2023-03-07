import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {
  const { hostVandetail } = useOutletContext()
  return (
    <div className='m-4 my-8'>
      <h1 className=' text-xl font-medium'> ${hostVandetail.price}.00/day</h1>
    </div>
  )
}

export default HostVanPricing