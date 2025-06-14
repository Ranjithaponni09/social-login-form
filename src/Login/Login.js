// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from './authSlice'; // ✅ Make sure this thunk is implemented correctly
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(form));
    if (!result.error) {
      navigate('/welcome');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleGoogleLogin = () => {
    window.open('http://localhost:4000/auth/google', '_self');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="avatar">
          <img
            src="https://media.istockphoto.com/id/1284882612/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol-circle.jpg?s=170667a&w=0&k=20&c=Ywi4OYB56tGP6UuPyfJlzqfAwEavEUaoyNy6USiW2rU="
            alt="User Avatar"
          />
        </div>

        <h2>Login</h2>

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

        <div className="form-options">
          <label>
            <input type="checkbox" name="remember" />Remember me
          </label>
          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>
        </div>

        <button type="submit" className="google-login-btn">Login</button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="google-login-btn"
        >
          Sign in with Google
        </button>

        <p className="switch-link">
          Don't have an account? <Link to="/register">Create Account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
