import React, { useEffect, useState } from "react";
import styles from './pagecss/ContactUs.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
    useEffect(() => {
        AOS.init({ duration: 300 }); // Initialize AOS with animation duration
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    // Handling input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form submit handler
    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true while the request is being made

        const formDataObject = new FormData(event.target);
        formDataObject.append("access_key", import.meta.env.VITE_WEB_ACCESS_TOKEN);

        const object = Object.fromEntries(formDataObject);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            // Check if submission was successful
            if (res.success) {
                alert("Your message has been sent successfully!");
                // Clear the form fields
                setFormData({
                    name: "",
                    number: "",
                    message: ""
                });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("There was an error with the submission. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <>

            <section id='contactpage' className={styles.contact_container} data-aos="slide-right">
                <h2 className={styles.heading}>Get In Touch</h2>
                <div className={styles.container}>
                    <div className={styles.darkbg}>
                        <form onSubmit={onSubmit}>
                            <h3>Contact us</h3>
                            <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} />

                            <input type="tel" name="number" placeholder="Phone no" required value={formData.number} onChange={handleChange} />

                            <textarea name="message" placeholder="Your message" required value={formData.message} onChange={handleChange} />

                            <button type="submit" className={styles.button} disabled={loading}>
                                {loading ? "Submitting..." : "Submit"}
                            </button>
                        </form>


                        <div className={styles.map}>
                            <a href="https://maps.app.goo.gl/EdAwjpvTJnwrKPct9">
                                <h3>Locate Us</h3>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76634.59773081214!2d88.60030885619355!3d27.03601553543561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f3d85a2e47b%3A0xdeb6a4e8207ed274!2sShanti%20Inn!5e0!3m2!1sen!2sin!4v1730264637618!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </a>
                        </div>
                    </div>

                </div>

            </section>


        </>
    );
}

export default ContactUs;
