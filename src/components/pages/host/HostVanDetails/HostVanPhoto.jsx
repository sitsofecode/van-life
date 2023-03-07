import React from 'react'
import { useOutletContext } from 'react-router-dom'
function HostVanPhoto() {
  const { hostVandetail } = useOutletContext()

  return (
    <div>
      <img src={hostVandetail.imageUrl} className="rounded-lg" alt='' />
    </div>
  )

}

export default HostVanPhoto