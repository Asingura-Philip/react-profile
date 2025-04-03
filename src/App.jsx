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
    
  );
}

export default App;
