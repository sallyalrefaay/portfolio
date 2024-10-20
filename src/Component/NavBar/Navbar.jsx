import "./Navbar.css";
import { useState } from "react";
import { NavItemes } from "./NavItemes";

const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    };

const Navbar = () => {
const [mobileMenuActive, setMobileMenuActive] = useState(false);
const [isDarkMode, setIsDarkMode] = useState(false);

const navMenu = () => {
setMobileMenuActive((prevState) => !prevState);
};

const toggleTheme = () => {
setIsDarkMode((prevState) => !prevState);
document.body.classList.toggle('dark-mode');
};

return (
<nav className={`NavbarItems ${isDarkMode ? 'dark-mode' : ''}`}>
    <img className="logo" src="/portfolio/assets/image/logo1.png" alt="" />
    <div className={`menu-icons ${isDarkMode ? "dark-mode" : ""}`} onClick={navMenu}>
        <i className={`fas ${mobileMenuActive ? "fa-times" : "fa-bars"}`}></i>
    </div>
    <ul className={`navbar-menu ${mobileMenuActive ? 'active' : ''} ${isDarkMode ? 'dark-mode' : ''}`}>
    {NavItemes.map((item, index) => (
        <li key={index} className={item.cName} onClick={() => handleScroll(item.id)}> {item.title} </li>
    )
    )}
    </ul>
    <div onClick={toggleTheme}
    className={` ${isDarkMode ? 'dark-mode' : ''}`}>
    <img src={`/portfolio/assets/image/${isDarkMode ? 'sun_fill.svg' : 'Moon_fill.svg'}`}
        alt="Theme Toggle"/>
    </div>
</nav>
);
};

export default Navbar;