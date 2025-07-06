import React, { useEffect, useRef, useState } from 'react';
import styles from './pagecss/Home.module.css'
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sightseeing from '../components/Sightseeing';
import { FaRegCheckCircle, FaCar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import Bookingform from '../components/Bookingform';
import Lastcomp from '../components/Lastcomp';
import Lastcardlayout from '../pagecomponents/Lastcardlayout';
import AccordionComponent from '../components/AccordionComponent';
import { amenitiesList } from '../constants/Aminities';
import Lastimglayout from '../pagecomponents/Lastimglayout';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
            <Navbar />
            <section id='homepage'>
                <div data-aos="zoom-in-down">

                    <div className={styles.banner}>
                        {/* <img src="/images/banner.jpg" alt="" /> */}

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
                                    <button className=" bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200">
                                        Call Now
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

            <div className={styles.cardpart} data-aos="fade-up">
                <h2 className='text-center text-amber-800 text-2xl font-semibold ' >List of Aminities</h2>
                <div className={styles.cards}>
                    {amenitiesList.map((item, index) => (
                        <Homecard
                            key={index}
                            cardimage={item.cardimage}
                            cardpara={item.cardpara}
                            cardtext={item.cardtext}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>

            {/* Cards parts end  */}



            <div className='flex max-w-[1100px] w-full px-2 flex-col md:flex-row mx-auto mt-16 gap-10'>
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col flex-1 px-4 gap-4" data-aos="zoom-out">
                    <h2 className="font-semibold text-2xl text-[#76311e]">
                        Experience the Beauty of Nature and Create Lasting Memories
                    </h2>
                    <p className="text-[#474645] text-sm">
                        From the breathtaking peaks to serene trails, our homestay offers a tranquil escape where you can immerse yourself in nature's beauty and enjoy the fresh mountain air.
                        Whether you're looking for the <strong>best hotel or homestay in Kalimpong and Jhandi</strong>, we provide a perfect blend of comfort, hospitality, and scenic charm.
                        Enjoy <strong>local sightseeing tours</strong>, personalized travel experiences, and delicious <strong>home-cooked food services</strong> made with fresh ingredients.
                        Discover why we are a top choice for families, couples, and nature lovers seeking an unforgettable stay in the hills.
                    </p>

                    <div className="flex flex-col gap-3">
                        <div className='flex items-start   gap-2 '>
                            <img src="/images/trust.jpg" alt="trust" className='w-8 mt-1' />
                            <p className="text-[#333] text-sm">
                                <strong>Trusted by Travelers:</strong> Check reviews and get in touch with us for any queries. Our team is happy to assist with personalized itinerary planning.
                            </p>
                        </div>

                        <div className='flex items-start gap-2 '>
                            <img src="/images/car.png" alt="car" className='w-8 mt-1' />
                            <p className="text-[#333] text-sm leading-snug">
                                <strong>Sightseeing & Transport:</strong> Enjoy local sightseeing tours with reliable vehicles, driver-guides, and doorstep pickup-drop convenience.
                            </p>
                        </div>

                        <div className='flex items-start gap-2'>
                            <img src="/images/food.png" alt="food" className='w-8 mt-1' />
                            <p className="text-[#333] text-sm leading-snug">
                                <strong>Delicious Local Meals:</strong> Taste authentic homemade dishes made from fresh, locally sourced ingredients. Both veg and non-veg options available.
                            </p>
                        </div>
                    </div>


                    <div className="mt-2 flex gap-2">
                        <button className="bg-emerald-600 text-white px-4 py-1 rounded-2xl ">
                            Nature Escape
                        </button>
                        <button className="bg-blue-400 text-white px-4 py-1 rounded-2xl ">
                            Seasonal Offer
                        </button>
                    </div>

                </div>

                <div className="w-full md:w-1/2 flex flex-col flex-1  gap-2" data-aos="fade-up">
                    <img src="/images/img1.jpg" alt="Nature 1" className=" h-[200px] object-cover rounded-md" />
                    <img src="/images/img4.jpg" alt="Nature 2" className="  h-[200px] object-cover rounded-md" />
                </div>
            </div>

 


            {/* sightseeing component */}
            <div id="sightseeing" data-aos="fade-up">
                <Sightseeing />
            </div>

            <div data-aos="fade-up">
                <Lastcomp />
            </div>

            <Lastcardlayout />
            <AccordionComponent />

            <Lastimglayout />

            <Footer />

        </>
    )
}


// aminities card
function Homecard({ cardimage, cardpara, cardtext, icon: Icon }) {
    return (
        <>
            <div className={styles.Homecard}>
                <img src={cardimage} alt="" />
                <div style={{ padding: '2px 6px' }}>
                    <p> {Icon && <Icon color="rgb(97, 17, 17)" style={{ margin: '3px 5px 0px 0px' }} />}{cardpara}</p>

                    <span>{cardtext}</span>
                </div>
            </div>
        </>
    )
}

export default Home