import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Login from './Login/Login';
import Register from './Login/Register';
import Welcome from './Login/welcome';
import About from './Login/About';
import { Contact } from './Login/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register />} />
        <Route path='/welcome' element={<Welcome/>}/>
                <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes>
    </Router>
  );
}

export default App;
