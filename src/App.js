import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import About from './components/pages/about';
import Home from './components/pages/home';
import Vans from './components/pages/vans';
import VanDetail from './components/pages/vanDetail';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/vans' element={<Vans/>}/> 
        <Route path='/vans/:id' element={<VanDetail/>}/> 
      </Routes>
    </div>
  );
}

export default App;
