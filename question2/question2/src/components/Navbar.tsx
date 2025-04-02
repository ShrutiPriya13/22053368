import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
