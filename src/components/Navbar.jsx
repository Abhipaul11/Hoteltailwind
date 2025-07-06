import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './componentcss/Navbar.module.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Detect screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        if (isMobile) {
            setIsDropdownOpen(prevState => !prevState);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to='/'><img src="../images/logo.jpg" alt="Logo" /></Link>
                <Link to='/'> <span className={styles.logoheading}>Shanti Group</span></Link>
            </div>

            <div className={styles.hamburger} onClick={toggleMenu}>
                <RxHamburgerMenu size={30} color="black" />
            </div>

            {/* Menu */}
            {/* <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}> */}
            <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
                <Link to="/" className={styles.hashlink}>
                    <li>Home</li>
                </Link>

                <Link to="/aboutpage" className={styles.hashlink}>
                    <li>About Us</li>
                </Link>

                {/* Dropdown Menu */}
                <li
                    className={styles.dropdown}
                    onClick={toggleDropdown}
                    onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
                    onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
                >
                    <div style={{ display: 'flex', alignItems: "center" }}>
                        <p>Other Places</p>
                        <IoMdArrowDropdown
                            color='black'
                            size={20}
                            style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
                        />
                    </div>

                    {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                            <Link to="/jhandi" className={styles.dropdownlink}><li>Jhandi</li></Link>
                            <Link to="/purbasthali" className={styles.dropdownlink}><li>Purbasthali</li></Link>
                            <Link to="/takdah" className={styles.dropdownlink}><li>Takdah</li></Link>
                            <Link to="/sillerygaon" className={styles.dropdownlink}><li>Sillerygaon</li></Link>
                            <Link to="/ramdhura" className={styles.dropdownlink}><li>Ramdhura</li></Link>
                            <Link to="/sittong" className={styles.dropdownlink}><li>Sittong</li></Link>
                            <Link to="/rockyisland" className={styles.dropdownlink}><li>Rocky Island</li></Link>
                        </ul>
                    )}
                </li>

                <Link to="/travelpackage" className={styles.hashlink}>
                    <li>Travel packages</li>
                </Link>

                <Link to="/gallery" className={styles.hashlink}>
                    <li>Gallery</li>
                </Link>

                <HashLink to="/contactus" className={styles.hashlink}>
                    <li>Contact</li>
                </HashLink>

                <li className={styles.cancel} onClick={toggleMenu}>X</li>
            </ul>
        </nav>
    );
}

export default Navbar;
