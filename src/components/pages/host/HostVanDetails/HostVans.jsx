import React, { Suspense } from 'react'
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { requireAuth } from '../../../../utils';
import { getHostVans } from '../../../api';

export async function loader({ request }) {
    await requireAuth(request)
    return defer({ hostVans: getHostVans() })
}

function HostVans() {
    const hostVansPromise = useLoaderData();

    const hostRenderElements = (hostVans) => {
        const hostVansEls = hostVans.map(van => (
            <Link
                to={van.id} key={van.id}>
                <div className="flex bg-white p-4 rounded-lg my-5" key={van.id}>
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
                <div className="host-vans-list">
                    <section>
                        {hostVansEls}
                    </section>
                </div></>
        )
    }

    return (
        <section className='p-4 bg-mainColor'>
            <h1 className="text-3xl font-bold">Your listed vans</h1>
            <Suspense fallback={<h1>Loarding ...</h1>}>
                <Await resolve={hostVansPromise.hostVans}>
                    {hostRenderElements}
                </Await>
            </Suspense>
        </section>
    )
}
export default HostVans