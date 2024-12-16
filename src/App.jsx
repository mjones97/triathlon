import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './components/Dashboard.jsx'
import Calendar from './components/Calendar.jsx'
import RightPanel from './components/RightPanel.jsx'

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/calendar" component={Calendar} />
            </Routes>
          </div>

          <RightPanel />
        </div>
      </div>
    </Router>
  )
}

export default App
