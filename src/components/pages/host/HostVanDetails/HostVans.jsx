import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HostVans() {
    const [hostVans, setHostVans] = useState()
    useEffect(() => {
        fetch("/api/host/vans")
            .then((response) => response.json())
            .then((data) => { setHostVans(data.vans) });
    }, [])
    console.log(hostVans)
    const hostVansCard = hostVans?.map((item) => {
        return (
            <Link to={`/host/vans/${item.id}`}>
                <div className='my-8'>
                    <div className='flex bg-white p-4 rounded-lg'>
                        <img src={item.imageUrl} alt='' className='h-20 rounded-lg' />
                        <div className='m-4'>
                            <h1 className='text-2xl font-medium '> {item.name}</h1>
                            <p className='mt-1'>$ {item.price}/ day</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div className='m-4  mt-8'>
            <h1 className='text-3xl font-semibold '>
                Your listed vans
            </h1>
            {hostVansCard}
        </div>
    )
}

export default HostVans