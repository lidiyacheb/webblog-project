import React from 'react';
import './Header.css'
import Navbar from "./Navbar.jsx";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="navbar-container">
                <Navbar />
                    <nav>
                        <Link to="/" style={{marginRight: 10}}>Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
                <div className="auth">
                    {/*Routing später erstellen*/}
                    <Link to="/login"><FaSignInAlt size={20} /></Link>
                    <Link to="/register"><FaUserPlus size={20} /></Link>
                </div>
            </header>
        </div>
    );
};

export default Header;