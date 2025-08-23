import React, { useEffect, useRef, useState } from 'react';
import styles from './pagecss/Home.module.css'
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Sightseeing from '../components/Sightseeing';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import Bookingform from '../components/Bookingform';
import Lastcomp from '../components/Lastcomp';
import AccordionComponent from '../components/AccordionComponent';

import { Link } from 'react-router-dom';
import HomefifthWide from '../pagecomponents/HomefifthWide';
import Homesecond from "../pagecomponents/Homesecond"
import AmenitiesSlider from '../pagecomponents/AmenitiesSlider';

function Home() {
    const sliderImages = [
        "/images/banner1.jpeg",
        "https://cdn.pixabay.com/photo/2020/03/29/16/17/sky-4981306_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/03/29/16/19/sky-4981313_1280.jpg",
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 4000);
        return () => clearInterval(slideInterval);
    }, [sliderImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    useEffect(() => {
        AOS.init({ duration: 600 }); // Initialize AOS with animation duration
    }, []);

    return (
        <>
            <section id='homepage'>
                <div data-aos="zoom-in-down">

                    <div className={styles.banner}>

                        {/* Hero Slider */}
                        <div className={styles.slider}>
                            {sliderImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`${styles.slide} ${index === currentSlide ? styles.active : ""
                                        }`}
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <div className={styles.navArrows}>
                            <FaArrowLeft onClick={prevSlide} className={styles.arrow} />
                            <FaArrowRight onClick={nextSlide} className={styles.arrow} />
                        </div>
                        <div className={styles.darkback}  >
                            <div className={styles.content} data-aos="fade-up">
                                <h3 className={styles.typingHeading}>Welcome to Shanti Group</h3>
                                <h3 className="text-white text-xl"> Shanti Inn Jhandi (Kalimpong)</h3>
                                <p className={styles.typingParagraph}>
                                    Explore the perfect <span>"Hotel and Travel booking service"   </span>  with Shanti Group!  Whether you're looking to relax at our stunning Shanti Inn in Jhandi or plan a seamless travel experience,
                                </p>

                                <a href="tel:+918240913778">
                                    <button className="bg-green-600 text-white px-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center ">
                                        <IoIosCall size={20} />
                                        <span>Call Now</span>
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className={styles.formpart}>
                            <Bookingform />
                        </div>

                    </div>
                </div>
            </section >



            <AmenitiesSlider />



            <div className={styles.homesecond}>
                <div className={styles.content2}>
                    <div className={styles.content2_homesecond} data-aos="fade-up" data-aos-delay="100">
                        <h2 className="font-semibold text-2xl text-[#76311e]">
                            Experience the Beauty of Nature and Create Lasting Memories
                        </h2>
                        <p className="text-[#474645] text-md">
                            From the breathtaking peaks to serene trails, our homestay offers a tranquil escape where you can immerse yourself in nature's beauty and enjoy the fresh mountain air.
                            Whether you're looking for the <strong>best hotel or homestay in Kalimpong and Jhandi</strong>, we provide a perfect blend of comfort, hospitality, and scenic charm.
                            Enjoy <strong>local sightseeing tours</strong>, personalized travel experiences, and delicious <strong>home-cooked food services</strong> made with fresh ingredients.
                            Discover why we are a top choice for families, couples, and nature lovers seeking an unforgettable stay in the hills.
                        </p>

                        <div className="flex flex-col gap-3 mt-2">
                            <div className='flex items-start gap-2 '>
                                <img src="/images/trust.jpg" alt="trust" className='w-8 mt-1' />
                                <p className="text-[#333] text-md">
                                    <strong>Trusted by Travelers:</strong> Check reviews and get in touch with us for any queries. Our team is happy to assist with personalized itinerary planning.
                                </p>
                            </div>

                            <div className='flex items-start gap-2 '>
                                <img src="/images/car.png" alt="car" className='w-10 mt-1' />
                                <p className="text-[#333] text-md leading-snug">
                                    <strong>Sightseeing & Transport:</strong> Enjoy local sightseeing tours with reliable vehicles, driver-guides, and doorstep pickup-drop convenience.
                                </p>
                            </div>

                            <div className='flex items-start gap-2'>
                                <img src="/images/food.png" alt="food" className='w-8 mt-1' />
                                <p className="text-[#333] text-md leading-snug">
                                    <strong>Delicious Local Meals:</strong> Taste authentic homemade dishes made from fresh, locally sourced ingredients. Both veg and non-veg options available.
                                </p>
                            </div>
                        </div>


                        <div className="mt-4 flex gap-2">
                            <Link to="/aboutpage">
                                <button className="bg-emerald-600 text-white px-6 py-2 rounded-full shadow-md 
                     hover:bg-emerald-700 hover:shadow-lg 
                     transition-all duration-300 ease-in-out 
                     font-medium tracking-wide">
                                    Know More
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

                <div className={styles.images} data-aos="fade-up" data-aos-delay="300">
                    <div className={styles.mainImage}>
                        <img src="/images/img1.jpg" alt=" " />
                    </div>
                    <div className={styles.smallImage}>
                        <img src="/images/img4.jpg" alt=" t" />
                    </div>

                </div>
            </div>

            <Homesecond />



            {/* <HomefifthWide /> */}


            {/* sightseeing component */}
            <div id="sightseeing" data-aos="fade-up">
                <Sightseeing />
            </div>

            <div data-aos="fade-up">
                <Lastcomp />
            </div>


            <AccordionComponent />




        </>
    )
}



export default Home