import React from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Auth from './components/Auth';
import Signup from './components/Signup';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <Login/> */}
    <Routes>
    <Route path="/" element={<Home />} />

    
    <Route path="/login" element={<Login />} />
    </Routes>

    </>
  )
}

export default App;