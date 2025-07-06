import React, { useState } from 'react'
import bookingstyles from './componentcss/Bookingform.module.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Bookingform() {

    const [formData, setFormData] = useState({
        name: "",
        phonenumber: "",
        guestnumber: "",
        checkin: "",
        checkout: ""
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
        console.log("Form submitted");
        setLoading(true);

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
                alert("Your enquiry is successful. We will contact you soon")
                toast.success("Your enquiry is successful. We will contact you soon");
                // Clear the form fields
                setFormData({
                    name: "",
                    phonenumber: "",
                    guestnumber: "",
                    checkin: "",
                    checkout: ""
                });
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("There was an error with the submission. Please try again.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <>
            <form onSubmit={onSubmit} className={bookingstyles.bookingform}>

                <div className={bookingstyles.inputgroup} >
                    <p>Name</p>
                    <input type="text" name='name' placeholder='Your name' required className={bookingstyles.input} value={formData.name} onChange={handleChange} />


                </div>

                <div className={bookingstyles.inputgroup} >
                    <p>Ph no</p>
                    <input type="number" name='phonenumber' placeholder='Phone no' required className={bookingstyles.input} value={formData.phonenumber} onChange={handleChange} />

                </div>

                <div className={bookingstyles.inputgroup} >
                    <p>Guest</p>
                    <input type="number" name='guestnumber' placeholder='How many Guest' required className={bookingstyles.input} value={formData.guestnumber} onChange={handleChange} />

                </div>

                <div className={bookingstyles.inputgroup} >
                    <p>Checkin-date</p>
                    <input type="date" name="checkin" placeholder="Enter Check-in date" required className={bookingstyles.input} value={formData.checkin} onChange={handleChange} />

                </div>

                <div className={bookingstyles.inputgroup} >
                    <p>Checkout-date</p>
                    <input type="date" name="checkout" placeholder="Enter Check-out date" required className={bookingstyles.input} value={formData.checkout} onChange={handleChange} />

                </div>

                <button type="submit" className={bookingstyles.enquiry} disabled={loading}>
                    {loading ? "Enquiry..." : "Enquiry"}
                </button>

            </form >

        </>
    )
}

export default Bookingform