import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./pagecomponentcss/AmenitiesSlider.module.css";

// Import Icons
import { LuBedDouble } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { IoBonfireOutline } from "react-icons/io5";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { PiVideoConferenceLight } from "react-icons/pi";

function AmenitiesSlider() {


    const amenitiesList = [
        {
            cardimage: "/images/room.jpg",
            cardpara: "Cozy Rooms",
            cardtext: "Stay in cozy rooms with scenic views.",
            icon: LuBedDouble,
            color: "text-purple-600",
        },
        {
            cardimage: "/images/breakfast.jpg",
            cardpara: "Free Breakfast",
            cardtext: "Start your day with a delicious breakfast.",
            icon: MdFastfood,
            color: "text-pink-600",
        },
        {
            cardimage: "/images/bonfire.jpg",
            cardpara: "Evening Bonfire",
            cardtext: "Relax together near the warm evening bonfire.",
            icon: IoBonfireOutline,
            color: "text-orange-500",
        },
        {
            cardimage: "/images/naturewalk.jpg",
            cardpara: "Nature Walks",
            cardtext: "Enjoy peaceful guided walks through green forests.",
            icon: FaCanadianMapleLeaf,
            color: "text-green-600",
        },
        {
            cardimage: "/images/service.png",
            cardpara: "24/7 Service",
            cardtext: "We provide reliable service anytime for guests.",
            icon: PiVideoConferenceLight,
            color: "text-blue-600",
        },
    ];



    return (
        <div className={styles.wrapper}>
            <h2 className="text-center text-amber-800 text-2xl font-semibold mb-6">
                List of Amenities
            </h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                autoplay={{ delay: 2500 }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {amenitiesList.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                            <img
                                src={item.cardimage}
                                alt={item.cardpara}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 text-center">

                                <h3 className="text-lg flex gap-1 font-semibold text-gray-800  ">
                                    <item.icon
                                        className={`${item.color} text-2xl drop-shadow-md`}
                                    /> {item.cardpara}
                                </h3>
                                <p className="text-sm text-gray-600 ">{item.cardtext}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AmenitiesSlider;
