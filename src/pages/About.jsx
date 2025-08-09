import React, { useEffect } from 'react'
import styles from './pagecss/About.module.css'
import { MdHiking, MdNaturePeople } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row  justify-between gap-8 bg-white px-6 py-12 rounded-lg max-w-[1200px] w-full m-auto " data-aos="fade-up">

                {/* Left Content */}
                <div className="md:w-1/2">

                    <h2 className="text-2xl font-semibold text-green-900 mb-2">
                        Discover the Essence of Hospitality in Shanti inn Jhandi
                    </h2>

                    <p className="text-gray-700 mb-4">
                        Jhandi is a small hamlet situated 6,200 feet above sea level, nestled in the serene hills of Jhandi, Kalimpong. Around 10 kilometers from Lava, <p className="text-gray-700 mb-4"><strong>Shanti Inn</strong> provides the ideal setting with well-appointed rooms and panoramic views of the surrounding mountains and lush valleys. <br /><br /><strong>How to Reach Jhandi:</strong> Jhandi is located approximately 10 km from Lava and 60 km from Siliguri. The nearest railway station is <strong>NJP (New Jalpaiguri)</strong>, and the closest airport is <strong>Bagdogra Airport</strong>. From either point, you can hire a private car or take a shared vehicle toward Kalimpong or Gorubathan, and then proceed to Jhandi. We also offer <strong>transport assistance and pickup services on request</strong> to make your journey smoother.
                        </p>

                    </p>


                </div>

                <div className="md:w-1/2">
                    <img
                        src="/images/download.jpg"
                        alt="Amantran Resort"
                        className="w-full rounded-2xl  object-cover"
                    />

                    <div className='mt-3'>
                        <HashLink to="/#homepage"> <button type="button" className="text-white bg-green-600  rounded-md text-sm px-5 py-2 hover:bg-green-700 text-center font-thin ">Book Now</button></HashLink>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row  justify-between gap-8 bg-white px-6 rounded-lg max-w-[1200px] w-full m-auto ">

                <div className="md:w-1/2">
                    <img
                        src="/images/food.jpg"
                        alt="Amantran Resort"
                        className="w-full rounded-2xl shadow-lg object-cover"
                    />
                </div>

                <div className="md:w-1/2">
                    <p className="text-gray-700 mb-3">
                        We also specialize in hosting <strong>conference and event packages</strong> tailored for every occasion — including <strong>birthday celebrations, corporate meetings, business tours, family functions</strong> we help you create meaningful moments in the lap of nature. <br />
                        In addition, we offer booking services for other properties in the region check them in the "Other Places" section. We can arrange the perfect accommodation to suit your needs. Our network ensures you have a variety of options to choose from, all with our trusted quality and service. As one of the best hotels in Jhandi, we offer <strong>sightseeing tours, food arrangements, bonfires, and nature walks</strong>. Let us help you experience the true beauty of North Bengal with the trusted comfort of Shanti Group..
                    </p>
                    <div className='flex gap-2'>
                        <button type="button" className="text-white bg-red-400  rounded-3xl text-sm px-3 py-1 text-center font-thin ">Great for Groups</button>
                        <button type="button" className="text-white bg-blue-500  first: rounded-3xl text-sm px-3 py-2 text-center font-thin">Peaceful Environment</button>
                    </div>
                </div>
            </div>

            <section id='aboutpage'>
                <div className={styles.secondpart} data-aos="fade-up">
                    <div className={styles.heading}>
                        <h3>Our Sevices</h3>
                        <div style={{ width: '100%', display: "flex", justifyContent: "center" }}>
                            <div style={{ width: '10rem', backgroundColor: 'red', padding: '1px', textAlign: "center" }}> </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.box}>
                            <img src="/images/png1.png" alt="" />
                            <p>Sightseeing service</p>
                            <span>Would you prefer a half-day city tour or a full day exploring Kalimpong? Let us know your preference, and we’ll adjust your itinerary to ensure a memorable and well-managed experience tailored to you!</span>
                        </div>
                        <div className={styles.box}>
                            <img src="/travelpics/png1.png" alt="" />
                            <p>Travel Packages</p>
                            <span>Discover best travel packages that take you through the stunning landscapes of India, Nepal, Bhutan, Sikkim, and more.We have the perfect itinerary for you.</span>
                        </div>
                        <div className={styles.box}>
                            <img src="/images/png2.png" alt="" />
                            <p>Amidst Nature</p>
                            <span>Nestled in the tranquil hills of Jhandi, Kalimpong, our location provides breathtaking views of rolling landscapes and majestic peaks. Immerse yourself in nature's beauty, enjoy serene surroundings.</span>
                        </div>
                        <div className={styles.box}>
                            <img src="/images/png3.jpeg" alt="" />
                            <p>"Delicious Local food"</p>
                            <span>Best freshly prepared delicious and traditional dishes, offering an authentic taste of the region’s rich culinary heritage.</span>
                        </div>
                        <div className={styles.box}>

                            <MdHiking size={40} color='red' />
                            <p>Activities </p>
                            <span>Enjoy cozy bonfire evenings, perfect for connecting with nature. Relax and unwind under the stars, sharing stories and experiencing the peaceful ambiance of the surrounding wilderness.</span>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default About;