import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      console.log('Login with:', { email, password });
      navigate('/welcome');
    } else {
      alert('Please enter valid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="avatar">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="User Avatar"
          />
        </div>

        <h2>Login</h2>

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

        <div className="form-options">
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
          <Link to="/forgot-password" className="forgot-link ">
            Forgot Password?
          </Link>
        </div>

        <button type="submit">Login</button>

        <a href="http://localhost:5000/auth/google" className="google-login-btn">
          Sign in with Google
        </a>

        <p className="switch-link">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
