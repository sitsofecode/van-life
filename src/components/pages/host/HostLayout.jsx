import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div className="m-4">
            <nav className='flex  space-x-6 text-gray-600'>
                <NavLink to="."
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className="hover:underline hover:text-black hover:font-medium"
                >Dashboard</NavLink>
                <NavLink to="/host/income"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className='hover:underline hover:text-black hover:font-medium'
                > Income </NavLink>
                <NavLink to="/host/vans"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className='hover:underline hover:text-black hover:font-medium'
                > Vans </NavLink>
                <NavLink to="/host/reviews"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    className='hover:underline hover:text-black hover:font-medium'
                > Reviews </NavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default HostLayout