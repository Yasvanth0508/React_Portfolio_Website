import "./Navbar.css";
import navLinks from "../../data/navLinks";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <ul>
                {navLinks.map(Links => (
                    <li key={Links}>
                        {Links}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;