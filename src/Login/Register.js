import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, phone, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'User created successfully');
        setUsername('');
        setPhone('');
        setEmail('');
        setPassword('');
      } else {
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {/* <div className="avatar"> */}
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="User Avatar"
          />
        </div> */}

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{10}"
          title="Enter 10 digit phone number"
          required
        />

        <input
          type="email"
          placeholder="Gmail ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Create Account</button>

        <p className="switch-link">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
