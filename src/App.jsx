import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Use BrowserRouter for routing
import { Intro, Content, PersonalDetails, ContactSection, Links, Table } from './components/components';
import Login from './pages/login'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  return (
    <Router>
      <div className={darkMode ? 'dark-mode' : ''}>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <Routes>
          <Route 
            path="/login" 
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLoginSuccess={handleLoginSuccess} />} 
          />
          <Route 
            path="/home" 
            element={isLoggedIn ? (
              <>
                <Intro />
                <Content />
                <PersonalDetails />
                <ContactSection />
                <Links />
                <Table />
              </>
            ) : (
              <Navigate to="/login" />
            )}
          />
          {/* Redirect to login if no route matches */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
