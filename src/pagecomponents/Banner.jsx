import React from 'react'
import styles from './pagecomponentcss/Banner.module.css';
import { HashLink } from 'react-router-hash-link';

function Banner({ image, title, description }) {
    return (
        <>
            <div className={styles.banner}>
                <img src={image} alt='' className={styles.image} />

                <div className={styles.darkbc}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        <p className={styles.description}>{description}</p>
                        <HashLink to='/contactus'><button>Contact now</button></HashLink>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner