import React from 'react'
import { HashLink } from 'react-router-hash-link';
import styles from './componentcss/Footer.module.css'
import { FaFacebook, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import Modalbox from './Modalbox';
import { useState } from 'react';


function Footer() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className={styles.container}>
                <footer>
                    <div className={styles.box}>
                        <div className={styles.logopart}>
                            <img src="/images/logo.jpg" alt="" />
                            <h2>Shanti Group</h2>
                        </div>
                        <p>Shanti Inn, a property of Shanti Group, offers a peaceful retreat. Relax .Enjoy breathtaking views with warm hospitality. Your comfort is our priority!</p>

                        <h2>Follow us on</h2>
                        <div className="flex">
                            <a href="https://www.facebook.com/profile.php?id=100057334124597&mibextid=ZbWKwL"><FaFacebook className={styles.icon} size={50} /></a>

                            <a href="https://wa.me/918240913778?text=Hello%20Shanti%20Inn!%20I'm%20interested%20for%20room%20booking!" target="_blank" rel="noopener noreferrer" > <IoLogoWhatsapp className={styles.icon} size={50} /></a>

                            <a href=""> <FaYoutube className={styles.icon} size={50} /></a>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <h2>Reach us</h2>

                        <a href="tel:8240913778"> <p style={{ display: 'flex', alignItems: 'center' }}> <FaPhoneAlt size={25} color='white' />8240913778</p></a>

                        <a href="tel:8017328094"> <p style={{ display: 'flex', alignItems: 'center' }}> <FaPhoneAlt size={25} color='white' />8017328094</p></a>

                        <a href="tel:8637388782"> <p style={{ display: 'flex', alignItems: 'center' }}> <FaPhoneAlt size={25} color='white' />8637388782</p></a>
                        <a href="tel:8101796762"> <p style={{ display: 'flex', alignItems: 'center' }}> <FaPhoneAlt size={25} color='white' />8101796762</p></a>
                        <a href="mailto:shantigroup2025@gmail.com"> <p style={{ display: 'flex', alignItems: 'center' }}><BiLogoGmail size={25} color='white' />shantigroup2025@gmail.com</p></a>
                        <p>Address: PB-64 Arjunpur Kolkata:700059</p>
                    </div>

                    <div className={styles.box}>
                        <h2>Links</h2>
                        <HashLink smooth to="/#homepage"><p>Home</p></HashLink>
                        <HashLink smooth to="/aboutpage"> <p>About</p></HashLink>
                        <HashLink smooth to="/contactus"> <p>Contact</p> </HashLink>
                        <HashLink smooth to="/gallery"> <p>Gallery</p> </HashLink>
                    </div>

                    <div className={styles.box}>
                        <h2>Legal</h2>
                        <p style={{ cursor: 'pointer' }} onClick={() => openModal("Privacy Policy",
                            <>
                                <p>1. Data Collection: We collect basic personal details (e.g., name, contact) for bookings and communication.</p>
                                <p>2. Usage: Your data is used to enhance services and ensure a smooth stay.</p>
                                <p>3. Protection: We implement strict measures to safeguard your information.</p>
                                <p>4. Sharing: Data isn’t shared without your consent, except as legally required.</p>
                            </>)}>Privacy policy</p>

                        <p style={{ cursor: 'pointer' }} onClick={() => openModal("Terms of Use",
                            <>
                                <p>1. Acceptance: By accessing our site, you agree to our terms and policies.</p>
                                <p>2. Modifications: We may update content, services, and terms to improve user experience.</p>
                                <p>3. Bookings: All bookings and services are subject to our guidelines.</p>
                                <p>4. Compliance: Users must comply with all applicable laws while using our site.</p>
                            </>
                        )}>Terms of use</p>

                        <span>&copy; {new Date().getFullYear()} Shanti Inn. All rights reserved.</span>
                    </div>

                </footer>
            </div>

            <Modalbox
                isOpen={isModalOpen}
                closeModal={closeModal}
                title={modalContent.title}
                content={modalContent.content}
            />
        </>
    )
}

export default Footer