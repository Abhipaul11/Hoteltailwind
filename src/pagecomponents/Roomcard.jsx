import React from 'react'
import styles from './pagecomponentcss/Roomcard.module.css';
import { FaBed } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";

function Roomcard({ bednumber, price, image, guest, wlink, bednum }) {
    return (
        <>
            <div className={styles.card}>
                <img src={image} alt="" />

                <div className={styles.middle}>
                    <p className={styles.text}>{bednumber}</p>
                    <p className={styles.price}>₹{price}</p>
                </div>
                <p className={styles.rtext}>Seasonal rates negotiable</p>

                <div className={styles.bottom}>
                    <div className={styles.icons}><FaBed className={styles.fabed} /> <p>{bednum}</p> </div>
                    <div className={styles.icons}><IoPeopleOutline className={styles.fabed} /><p>{guest}</p></div>
                    <div className={styles.icons}><MdOutlineBathroom className={styles.fabed} /><p>1bathroom</p></div>
                </div>


                {wlink && (
                    <a href={wlink} target="_blank" rel="noopener noreferrer">
                        <button className={styles.enquiry}>Enquiry</button>
                    </a>
                )}

            </div>
        </>
    )
}

export default Roomcard