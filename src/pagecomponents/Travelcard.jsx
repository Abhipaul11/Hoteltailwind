import React from 'react'
import styles from './pagecomponentcss/Travelcard.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

function Travelcard({ image, place, summary, day, rate, contactLink }) {

    return (
        <>
            <div className={styles.travelcard}>
                <p className={styles.day} > <MdAccessTimeFilled size={13} color='white' />{day}</p>
                <div className={styles.imgbox}>
                    <img src={image} alt="" />
                </div>
                <span><FaLocationDot size={15} color='grey' /> {place}</span>
                <p className={styles.summary}>{summary} </p>
                <p style={{ fontSize: "13px", marginLeft: "5px" }}>Rates depends on season contact for more details</p>
                <div className={styles.last}>
                    <a href={contactLink} target="_blank" rel="noopener noreferrer">
                        <button>Contact</button>
                    </a>
                    <p className={styles.rate}>From ₹{rate}</p>
                </div>

            </div >
        </>
    )
}

export default Travelcard