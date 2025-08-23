import React, { useEffect } from 'react'
import styles from './pagecss/About.module.css'
import { MdHiking, MdNaturePeople } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';
import {
    FaBed,
    FaUtensils,
    FaTree,
    FaBinoculars,
    FaShip,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row  justify-between gap-8 bg-white px-6 py-12 rounded-lg max-w-[1350px] w-full m-auto " data-aos="fade-up">

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

            <div className="flex flex-col-reverse md:flex-row  justify-between gap-8 bg-white px-6 rounded-lg max-w-[1350px] w-full m-auto ">

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
                <AboutFeatures />

            </section>



        </>
    )
}

export default About;





const aboutFeatures = [
    {
        default: true,
        img: "/images/png1.png",
        title: "Sightseeing Service",
        desc: "Would you prefer a half-day city tour or a full day exploring Kalimpong? Let us know your preference, and we’ll adjust your itinerary to ensure a memorable and well-managed experience tailored to you!",
    },
    {
        img: "/travelpics/png1.png",
        title: "Travel Packages",
        desc: "Discover the best travel packages that take you through the stunning landscapes of India, Nepal, Bhutan, Sikkim, and more. We have the perfect itinerary for you.",
    },
    {
        img: "/images/png2.png",
        title: "Amidst Nature",
        desc: "Nestled in the tranquil hills of Jhandi, Kalimpong, our location provides breathtaking views of rolling landscapes and majestic peaks. Immerse yourself in nature's beauty, enjoy serene surroundings.",
    },
    {
        img: "/images/png3.jpeg",
        title: "Delicious Local Food",
        desc: "Best freshly prepared delicious and traditional dishes, offering an authentic taste of the region’s rich culinary heritage.",
    },
    // {
    //     img: "/images/bonfire.png",
    //     title: "Activities & Bonfire",
    //     desc: "Enjoy cozy bonfire evenings, perfect for connecting with nature. Relax and unwind under the stars, sharing stories and experiencing the peaceful ambiance of the surrounding wilderness.",
    // },
];

function AboutFeatures() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: true,
        });
        AOS.refresh();
    }, []);

    return (
        <section className="py-12 bg-gray-50 mt-4">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
                    Our <span className="text-orange-600">Best Services</span>
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {aboutFeatures.map((item, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl p-6 transition shadow-md ${item.default
                                ? "bg-green-600 text-white "
                                : "bg-white hover:bg-green-600 text-gray-800 hover:text-white"
                                }`}
                            data-aos="fade-up"
                        >
                            {item.img && (
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-16 h-16 object-contain mb-4 mx-auto"
                                />
                            )}
                            <h3
                                className={`text-lg font-semibold mb-2 text-center  `}
                            >
                                {item.title}
                            </h3>

                            <p
                                className={`text-center `}
                            >
                                {item.desc}
                            </p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
