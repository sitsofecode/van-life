import React from 'react';
import {
  Route,
  createBrowserRouter, RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Vans, { loarder as vansLoader } from './components/pages/van/Vans';
import VanDetail, { vanDetailsLoader } from './components/pages/van/VanDetail';
import Layout from './components/Layout';
import Dashboard  , { loader as DashboardLoader} from './components/pages/host/Dashboard';
import Login, { loginLoader, action as loginAction } from './components/pages/Login';
import Income from './components/pages/host/Income';
import Reviews from './components/pages/host/Reviews';
import HostLayout from './components/pages/host/HostLayout';
import HostVans, { loader as hostVansLoader } from './components/pages/host/HostVanDetails/HostVans';
import HostVandetail from './components/pages/host/HostVanDetails/HostVandetail';
import HostDetailsLayout, { loader as hostDetailLoader } from './components/pages/host/HostVanDetails/HostDetailsLayout';
import HostVanPricing from './components/pages/host/HostVanDetails/HostVanPricing';
import HostVanPhoto from './components/pages/host/HostVanDetails/HostVanPhoto';
import Page from './components/pages/404page';
import { Toaster } from 'react-hot-toast';
import Error from './components/Error';
import { requireAuth } from './utils';
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(

  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path="login" element={<Login />} action={loginAction} loader={loginLoader} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailsLoader} />

    <Route path='host' element={<HostLayout />}  >
      <Route index element={<Dashboard />} loader={DashboardLoader} />
      <Route path="income" element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="reviews" element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
      <Route path="vans" element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
      <Route path="vans/:id" element={<HostDetailsLayout />} loader={hostDetailLoader} errorElement={<Error />} >
        <Route index element={<HostVandetail />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="pricing" element={<HostVanPricing />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path="photo" element={<HostVanPhoto />} loader={async ({ request }) => await requireAuth(request)} />
      </Route>
    </Route>
    <Route path='*' element={<Page />} />
  </Route>

))
function App() {

  return (
    <div className='sans serif'>
      <Toaster />
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
