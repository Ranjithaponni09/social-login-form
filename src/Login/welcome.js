import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, logoutUser } from './authSlice';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Welcome.css';

function Welcome() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="">
      <nav className="navbar">
        <div className="nav-left">
          <h3>School</h3>
        </div>
        <div className="nav-right">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          {user ? (
            <button onClick={handleLogout} className="nav-button">Logout</button>
          ) : (
            <button onClick={handleLogin} className="nav-button">Login</button>
          )}
        </div>
      </nav>

      <Container className="welcome-container">
        <div className="welcome-message">
          <h2>Welcome {user?.username || 'Guest'}!</h2>
        </div>
      </Container>
    </div>
  );
}

export default Welcome;
