import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Dashboard from './components/Dashboard.jsx'
import Dashboard from './components/dashboard'
// import WeeklyActivity from './components/chart.jsx'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
   
     <Navbar/>
     

     < Dashboard />
     {/* <WeeklyActivityChart/> */}
     
     <Sidebar/>
      {/* <WeeklyActivity /> */}
    
    </>
  )
}

export default App
