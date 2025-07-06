import React, { useEffect } from 'react'
import styles from './pagecss/Travelpack.module.css'
import Travelcard from '../pagecomponents/Travelcard'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TRAVELCARDS_DATA } from '../constants/Travelcard'
import { featureBoxes } from '../constants/FeatureBox'

function Travelpack() {
    useEffect(() => {
        AOS.init({ duration: 400 }); // Initialize AOS with animation duration
    }, []);
    return (
        <>
            <Navbar />

            <div className={styles.overlay}>
                <section className={styles.heroSection}>
                    <div className={`${styles.textContent} fade-in`}>
                        <h5 className={`${styles.subtitle} fade-in`}>Travel Budgets</h5>
                        <h3 className={`${styles.title} fade-in`}>Trip Planning for the Best Travel Experience Possible</h3>
                        <p className={`${styles.description} fade-in`}>
                            Welcome to our <span style={{ color: "antiquewhite", textTransform: "uppercase", fontStyle: "italic", fontWeight: "bold" }}>"Shanti adventure travel agency"</span> , where we specialize in providing our clients with unforgettable travel experiences.
                            Whether you're looking to relax on a tropical mountains or beaches we can help you plan your dream vacation. From Tickets and accommodations to tours and activities, we'll handle all the details, so you can focus on making memories.
                        </p>
                        <button
                            className={styles.button}
                            onClick={() => {
                                const message = encodeURIComponent("Hello Shanti Group! I want to book a travel package for ( place name ). Can you please provide more details?");
                                window.open(`https://wa.me/918240913778?text=${message}`, "_blank");
                            }}
                        >
                            Get in touch
                        </button>

                    </div>
                    <div className={styles.imageGallery}>
                        <img src='/images/lava.jpg' alt='Travel 1' className={styles.image1} />
                        <img src='/images/rishop.jpg' alt='Travel 2' className={styles.image2} />
                        <img src='/images/food.jpg' alt='Travel 3' className={styles.image3} />
                        <img src='/images/nokdara.jpg' alt='Travel 4' className={styles.image4} />
                    </div>
                </section>
            </div>

            <div className={styles.planheader}>
                <h3>Top Travel destination  avaliable for you</h3>
            </div>
            <div data-aos="fade-up" >
                <div className={styles.widecardcontainer}>
                    <TripPlanner img='/images/kashmir.jpg' title='Kashmir' />
                    <TripPlanner img='/images/manali.jpg' title='Sikkim' />
                    <TripPlanner img='/images/ladakh.jpg' title='Nepal' />
                    <TripPlanner img='/travelpics/sikkim.jpg' title='Kalimpong' />
                    <TripPlanner img='/travelpics/nepal.jpg' title='kashmir' />
                </div>
            </div>


            <div className={styles.travelcard_container}>
                {TRAVELCARDS_DATA.map((trip, index) => (
                    <div data-aos='flip-right' key={index}>
                        <Travelcard
                            image={trip.img}
                            place={trip.title}
                            summary={trip.summary}
                            day={trip.day}
                            rate={trip.rate}
                            contactLink={`https://wa.me/918240913778?text=${encodeURIComponent(
                                `Hello, I would like to know more about the ${trip.title} travel package.`
                            )}`}
                        />
                    </div>
                ))}
            </div>

            <h3 className={styles.beforeheading}>Perfect Vacation planning for you</h3>
            <p className="max-w-[55rem] w-[95%] mx-auto text-gray-700 mb-4">
                Whether you're looking to unwind in the peaceful hills of Kalimpong, explore the high passes of Ladakh, or enjoy scenic adventures in Sikkim and Nepal, we curate every travel plan to match your comfort and curiosity. From transportation and lodging to sightseeing and local cuisine — we take care of everything, so you can travel stress-free and soak in every moment of your journey.
            </p>


            <div className={styles.container}>
                {featureBoxes.map((feature, index) => (
                    <FeatureBox
                        key={index}
                        img={feature.img}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

            <Footer />
        </>
    )
}

export default Travelpack



function TripPlanner({ img, title }) {

    return (
        <div className={styles.tripplan}>

            <img src={img} className={styles.image} />
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>

        </div>
    );
}



function FeatureBox({ img, title, description }) {
    return (
        <div className={styles.box}>
            <img src={img} alt={title} />
            <p className={styles.head}>{title}</p>
            <p className={styles.para}>{description}</p>
        </div>
    );
}