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
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <button id="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        
        <Routes>
          
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLoginSuccess={handleLoginSuccess} />}
          />
          
          <Route
            path="/home"
            element={
              <>
                <Intro />
                <PersonalDetails />
                <Content />
                <Table />
                <Links />
                <ContactSection />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
