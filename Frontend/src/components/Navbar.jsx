import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand"><Link to="/">
                <span className="brand-accent">Work</span>Way</Link>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/jobs" >Jobs</NavLink></li>
                <li><NavLink to="/resume" >Resume</NavLink></li>
                <li>Tracker</li>
            </ul>
            <div className="nav-buttons">
                <button className="btn btn-login">Login</button>
                <button className="btn btn-register">Register</button>
            </div>
        </nav>
    )
}
export default Navbar;