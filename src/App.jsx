import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ProfileForm from './components/ProfileForm';
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <Navbar/>
      <div className='md:hidden'>
        <Home/>
      </div>
      <Sidebar />
      
    </div>
  );
}

export default App;