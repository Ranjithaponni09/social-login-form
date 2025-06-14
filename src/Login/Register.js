// Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './authSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser(form));
    if (!result.error) {
      alert('✅ Registration successful');
      navigate('/');
    } else {
      alert('❌ Registration failed: ' + (result.payload?.message || ''));
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Create Account</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          title="Enter 10 digit phone number"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Gmail ID"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
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
