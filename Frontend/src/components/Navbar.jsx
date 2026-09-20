import './Navbar.css'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <span className="brand-accent">Work</span>Way
        </Link>
      </div>

      <ul className="nav-links">
        <li><NavLink to="/jobs">Jobs</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="/tracker">Tracker</NavLink></li>
      </ul>

      <div className="nav-buttons">
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: '#c9d1d9', fontSize: '0.9rem', fontWeight: '500' }}>
              👤 {user.name || user.email}
            </span>
            <button onClick={handleLogout} className="btn btn-login" style={{ cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-login">Login</Link>
            <Link to="/register" className="btn btn-register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
