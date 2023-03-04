import React from 'react';
import { Route, Routes , Outlet } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Vans from './components/pages/van/Vans';
import VanDetail from './components/pages/van/VanDetail';
import Layout from './components/Layout';
import Dashboard from './components/pages/host/Dashboard';
import Income from './components/pages/host/Income';
import Reviews from './components/pages/host/Reviews';
import HostLayout from './components/pages/host/HostLayout';
import HostVans from './components/pages/host/HostVanDetails/HostVans';
import HostVandetail from './components/pages/host/HostVanDetails/HostVandetail';
import HostDetailsLayout from './components/pages/host/HostVanDetails/HostDetailsLayout';
import HostVanPricing from './components/pages/host/HostVanDetails/HostVanPricing';
import HostVanPhoto from './components/pages/host/HostVanDetails/HostVanPhoto';

function App() {
  return (
    <div className="bg-mainColor">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans'>
            <Route index element={<Vans />} />
            <Route path=':id' element={<VanDetail />} />
          </Route>
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<Outlet />}>
              <Route index element={<HostVans />} />
              <Route path=":id" element={<HostDetailsLayout />} >
              <Route index element={<HostVandetail />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photo" element={<HostVanPhoto />} />
            </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
