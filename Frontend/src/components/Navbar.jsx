import './Navbar.css'
function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-accent">Work</span>Way
            </div>
            <ul className="nav-links">
                <li>Jobs</li>
                <li>Tracker</li>
                <li>Resume</li>
            </ul>
            <div className="nav-buttons">
                <button className="btn btn-login">Login</button>
                <button className="btn btn-register">Register</button>
            </div>
        </nav>
    )
}
export default Navbar;