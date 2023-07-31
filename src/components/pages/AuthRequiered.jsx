import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function AuthRequiered() {

   const auth = { token: localStorage.getItem('token') }
   if (!auth.token) {
      console.log(auth.token)
      return (<Navigate to="/login?message=You must log in first" state />)
   }
   if (auth.token) {
      return (
         <Outlet />
      )
   }
}

export default AuthRequiered




//  to tghe poart of the protected routre we can also use  the loader 
// with the loader  we just need to create a utiles.js and creat a requireAuth  function and use the loader in the router to call the async fonction