import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Calendar from './components/Calendar.jsx'
import RightPanel from './components/RightPanel.jsx'

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col">
          <Navigation />
          <Dashboard />
          <RightPanel />
        </div>
        <Routes>
          <Route path="/" element={<Calendar />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
