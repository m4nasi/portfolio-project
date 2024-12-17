import {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './navStyles.css';

import AboutMe from './aboutSection';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return <nav className="navbar">
        <Router>
            <div className="container">
                <a href="#" className="logo">Manasi Mehta</a>
                <button className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
                        aria-label="Toggle navigation" 
                        onClick={toggleMenu} >
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/about" element={<AboutMe />} />
            </Routes>
        </Router>
    </nav>
}
