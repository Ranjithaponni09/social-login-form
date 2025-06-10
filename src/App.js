import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Login from './Login/Login';
import Register from './Login/Register';
import Welcome from './Login/welcome';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Register" element={<Register />} />
        <Route path='/welcome' element={<Welcome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
