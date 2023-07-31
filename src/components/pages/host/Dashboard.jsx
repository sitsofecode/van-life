
import React, { Suspense } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { requireAuth } from '../../../utils';
import { getHostVans } from '../../api';
import { AiFillStar } from 'react-icons/ai'
export async function loader({ request }) {
    await requireAuth(request)
    return defer({ hostVans: getHostVans() })
}

function Dashboard() {
    const hostVansPromise = useLoaderData();
    const hostRenderElements = (hostVans) => {
        const hostVansEls = hostVans.map(van => (
            <Link
                to={van.id} key={van.id}>
                <div className="flex bg-white p-4 rounded-lg my-8" key={van.id}>
                    <img src={van.imageUrl} alt='' className='h-20 rounded-lg' />
                    <div className="m-4">
                        <h3 className='text-xl font-semibold'>{van.name}</h3>
                        <p className='mt-1'>${van.price}/day</p>
                    </div>
                </div>
            </Link>
        ))
        return (
            <>
                <div >
                    <section className="">
                        {hostVansEls}
                    </section>
                </div></>
        )
    }


    return (
        <>
            <section className='bg-vanButton p-6'>
                {/* Income div */}
                <h1 className="text-4xl font-semibold"> Welcome!</h1>
                <div className='flex  justify-between p-4'>
                    <h1 className="text-lg font-light  text-gray-500">Income last <span className='font-bold underline'>30 days</span></h1>
                    <Link to="/host/income">
                        Details
                    </Link>
                </div>
                <h1 className="text-4xl font-semibold">
                    $2,260
                </h1>
            </section>
            <section className='bg-aboutColor p-6'>
                <div className='flex justify-between p-4'>
                    <h1 className='flex justify-center items-center text-2xl  '><span className=' font-semibold'> Review score </span>   <AiFillStar  className='mx-2 text-3xl text-orange-500'/> <span className='font-semibold '>5.0</span>/5 </h1>
                    <Link to="/host/reviews">
                        Details
                    </Link>
                </div>
            </section>
            <div>
                <section className='bg-mainColor p-6'> 
                    <div className='flex  justify-between p-4'>
                        <h1 className="text-xl font-semibold">Your listed vans</h1>
                        <Link to="/host/vans">
                            View all
                        </Link>
                    </div>
                    <Suspense fallback={<h1>Loarding ...</h1>}>
                        <Await resolve={hostVansPromise.hostVans}>
                            {hostRenderElements}
                        </Await>
                    </Suspense>
                </section>
            </div>
        </>
    )
}

export default Dashboard