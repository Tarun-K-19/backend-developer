import '../styles/navbar.css'

function NavBar() {
    return (
        <header className="navbar" id="navbar">
        <div className="nav-container">
            <div className="nav-logo">Tarun<span>.dev</span></div>

            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>
    );
}

export default NavBar;