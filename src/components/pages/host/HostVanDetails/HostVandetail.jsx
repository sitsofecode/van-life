import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVandetail() {
  const { hostVandetail } = useOutletContext()
  return (
    <div className='space-y-4'>
      <h1> <span className='font-medium'> Name : </span>{hostVandetail.name}</h1>
      <h1> <span className='font-medium'> Category : </span>{hostVandetail.type}</h1>
      <h1> <span className='font-medium'> Description : </span>{hostVandetail.description}</h1>
      <h1> <span className='font-medium'>Visibility : </span> Public</h1>
    </div>
  )
}

export default HostVandetail