import React, { useState } from 'react';
import Sidebar from './components/Sidebar';

import ProfileForm from './components/ProfileForm';
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <Navbar/>
      
      <Sidebar />
      
    </div>
  );
}

export default App;