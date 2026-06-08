import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">ServicePro</div>
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
                <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>
            </div>
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
        </nav>
    );
}