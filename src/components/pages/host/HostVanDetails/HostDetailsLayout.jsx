import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

function HostDetailsLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const params = useParams();
    const [hostVandetail, setHostVanDetails] = useState();
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(response => (response.json()))
            .then(data => setHostVanDetails(data.vans));
    }, [params.id])

    if (!hostVandetail) {
        return (<div>
            Loarding ...
        </div>)
    }
    return (
        <section>
            <div className="m-4 my-6">
                <Link
                    className="hover:underline"
                    to=".."
                    relative="path"
                >&larr; <span>Back to all vans</span></Link>
            </div>
            <div className="m-4 bg-white p-4 rounded-lg">
                <div className="flex">
                    <img className=" h-32 rounded" src={hostVandetail.imageUrl} alt='' />
                    <div className="m-4">
                        <h1 className="text-3xl font-semibold"> {hostVandetail.name}</h1>
                        <p className="font-medium text-xl mt-2">${hostVandetail.price}/day</p>
                    </div>
                </div>

                <nav className='flex  space-x-6 text-gray-600 my-4'>
                    <NavLink to="."
                        end
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className="hover:underline hover:text-black hover:font-medium"
                    >Details</NavLink>
                    <NavLink to="pricing"
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='hover:underline hover:text-black hover:font-medium'
                    > pricing </NavLink>
                    <NavLink to="photo"
                        style={({ isActive }) => isActive ? activeStyle : null}
                        className='hover:underline hover:text-black hover:font-medium'
                    > Photo </NavLink>
                </nav>
                <Outlet context={{ hostVandetail }} />
            </div>
        </section>
    );
}

export default HostDetailsLayout