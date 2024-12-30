import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/dashboard';
import ProfileForm from './components/ProfileForm';
import Navbar from './components/Navbar'

function App() {
  // const [currentView, setCurrentView] = useState('Dashboard');

  // const showDashboard = () => {
  //   setCurrentView('dashboard');
  // };

  // const showSettings = () => {
  //   setCurrentView('settings');
  // };

  return (
    <div>
      <Navbar/>
      
      <Sidebar />
      {/* <button onClick={showDashboard}>Dashboard</button>
      <button onClick={showSettings}>Settings</button>
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'settings' && <ProfileForm />} */}
    </div>
  );
}

export default App;