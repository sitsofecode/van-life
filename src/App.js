import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import About from './components/pages/about';
import Home from './components/pages/home';

function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
